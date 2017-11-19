import squel from 'squel';
import { TABLES } from '../constants';

const table = TABLES.USERS;


export function getSelectAllUsersQuery() {
    return squel.select()
        .from(table.NAME)
        .toString()
}

