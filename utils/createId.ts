import v4 from 'uuid/v4';
import { Id } from 'AppTypes';

const createId: () => Id = () => v4();

export default createId;
