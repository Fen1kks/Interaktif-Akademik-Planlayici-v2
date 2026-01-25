import { DepartmentRegistry } from '../types';
import { ME } from './departments/me';
import { CSE } from './departments/cse';
import { EE } from './departments/ee';
import { BME } from './departments/bme';
import { CHBE } from './departments/chbe';
import { GBE } from './departments/gbe';
import { ISE } from './departments/ise';
import { MSN } from './departments/msn';

export const departments: DepartmentRegistry = {
    ME, CSE, EE, BME, CHBE, GBE, ISE, MSN
};
