import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import * as path from 'path';

const typesArray = fileLoader(path.join(__dirname, '**/*.graphql'));

export const stitchSchema = mergeTypes(typesArray);
