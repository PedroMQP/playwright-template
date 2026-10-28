import { mergeTests } from "@playwright/test";
import {test as auth} from "./authenticated.without.po";
import {test as po} from "./page-objects";
import {test as mock} from "./mock"

export const test = mergeTests(auth, po, mock);
