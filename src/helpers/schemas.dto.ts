export class CustomInfoResDto {
  status: number = 200;
  message: string = 'Successful';
  info: string = '';
}

export class SampleInfoResDto {
  status = 200;
  message = 'Successful';
  info = 'Request processed successfully';
}

export class CustomListResDto {
  status: number = 200;
  message: string = 'Successful';
  count: number = null;
  page: number = null;
  next_page: number = null;
  results: object = [];
}

export class CustomResDto {
  status: number = 200;
  message: string = 'Successful';
  results: object = {};
}
