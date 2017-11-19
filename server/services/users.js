import { manyOrNone } from '../db/postgres';
import { getSelectAllUsersQuery } from '../sql-helpers';

export function getAllUsers() {
    return manyOrNone(getSelectAllUsersQuery())
}
