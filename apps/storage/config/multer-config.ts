import { diskStorage } from 'multer';
import { join, parse } from 'path';
import { v4 as uuidv4 } from 'uuid';

const multerConfig = {
  storage: diskStorage({
    destination: join(__dirname, '..', 'storage/static'),
    filename: (req, file, cb) => {
      const fileName =
        parse(file.originalname).name.replace(/\s/g, '') + '-' + uuidv4();

      const extension = parse(file.originalname).ext;
      cb(null, `${fileName}${extension}`);
    },
  }),
};

export default multerConfig;
