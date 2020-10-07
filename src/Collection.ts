import fs from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';

type Options = {
  type: '$set' | '$inc';
  property: string,
  value?: any
}

type Query = {
  property: string;
  value: string;
}

type HasID = {
  _id: string;
  [key: string]: any;
}

export default class Collection<T> {

  private collectionPath: string;
  private table: Array<T & HasID>;
  private uniqueProperty: {
    enable: boolean,
    name: string
  }

  constructor(connection: string, dbPath: string) {
    this.table = [];
    this.uniqueProperty = { enable: false, name: '' }
    this.collectionPath = path.join(dbPath, `${connection}.json`);
    const collectionExists = fs.existsSync(this.collectionPath);
    if (!collectionExists) {
      fs.writeFileSync(this.collectionPath, JSON.stringify(this.table));
    } else {
      this.table = JSON.parse(fs.readFileSync(this.collectionPath).toString());
    }
  }

  public setUniqueProperty(name: string) {
    this.uniqueProperty.enable = true;
    this.uniqueProperty.name = name;
  }

  public insert(record: T & { [key: string]: any }): T & HasID {
    if (typeof record !== 'object') throw new Error('Insertion must be of type object!');
    if (this.uniqueProperty.enable) {
      if (this.isRecordPresent({ property: this.uniqueProperty.name, value: record[this.uniqueProperty.name] })) {
        throw new Error(`Property "${this.uniqueProperty.name}" has to be unique!`);
      }
    }
    const insertion = {
      ...record,
      _id: nanoid(10).toLowerCase()
    }
    this.table.push(insertion);
    this.sync();
    return insertion;
  }

  public findAll(): Array<T & HasID> {
    return this.table;
  }

  private isRecordPresent(query: Query): boolean {
    const record = this.table.filter(r => r[query.property] == query.value);
    if (record.length) return true
    else return false;
  }

  public find(query: Query): Array<T & HasID> {
    const record = this.table.filter(r => r[query.property] == query.value);
    if (record.length) return record;
    else throw new Error('Record doesn\'t exist!');
  }

  public findOne(id: string) {
    const record = this.table.filter(r => r._id === id)[0];
    if (record) return record;
    else throw new Error('Record doesn\'t exist!');
  }

  public updateOne(id: string, options: Options): T & HasID {
    const record = this.findOne(id);
    if (options.type === '$set') {
      return this.$set(record, options.property, options.value);
    } else {
      return this.$inc(record, options.property);
    }
  }

  private $set(record: (T & HasID), property: keyof (T & HasID), value: any): T & HasID {
    if (property === '_id') throw new Error('Cannot set property "_id"!');
    if (typeof value !== typeof record[property]) throw new Error(`Cannot apply "$set" "${value}" of type "${typeof value}" to property "${property}"of type "${typeof record[property]}"`);
    if (this.uniqueProperty.enable && property === this.uniqueProperty.name) {
      if (this.isRecordPresent({ property: this.uniqueProperty.name, value })) {
        throw new Error(`Property "${this.uniqueProperty.name}" has to be unique!`);
      }
    }
    record[property] = value;
    this.sync();
    return record;
  }

  private $inc(record: (T & HasID), property: keyof (T & HasID)): T & HasID {
    if (property === '_id') throw new Error('Cannot set property "_id"!');
    if (typeof record[property] !== 'number') throw new Error(`Cannot apply "$inc" on property "${property}" of type ${typeof record[property]}`);
    record[property]++;
    this.sync();
    return record;
  }

  public removeOne(id: string): T & HasID {
    let index = -1;
    for (let i = this.table.length - 1; i >= 0; i--) {
      if (this.table[i]._id === id) {
        index = i;
      }
    }
    if (index === -1) {
      throw new Error('Record doesn\'t exist!');
    }
    const deleted = this.table.splice(index, 1)[0];
    this.sync();
    return deleted;
  }

  private sync() {
    fs.writeFileSync(this.collectionPath, JSON.stringify(this.table));
  }
}