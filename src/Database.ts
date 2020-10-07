import Collection from './Collection';
import fs from 'fs';
import path from 'path';

export default class Databse {

  private dbPath: string;

  constructor(dbPath: string) {
    this.dbPath = path.join(dbPath, 'db');
    const dbExist = fs.existsSync(this.dbPath);
    if (!dbExist) {
      fs.mkdirSync(this.dbPath);
    }
  }

  get<T>(connection: string): Collection<T> {
    return new Collection<T>(connection, this.dbPath);
  }
}
