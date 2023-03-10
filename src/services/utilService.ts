import * as Ajv from 'ajv'
import * as AjvError from 'ajv-errors'
import * as AjvKeyWords from 'ajv-keywords'
import * as _ from 'lodash'
export class UtilService {
  insertToArray(arr: any[], index: number, ...newItems: any) {
    return [
      ...arr.slice(0, index),
      ...newItems,
      ...arr.slice(index)
    ]
  }
  validateSchema(schema: any, json: any = {}) {
    const Ajv = require('ajv');
    const schemaValidator = Ajv();
    const testSchemaValidator = schemaValidator.compile(json);
    const valid = testSchemaValidator(schema);
    return {
      isValid: valid,
      message: !valid ? testSchemaValidator.errors : undefined
    }
  }

  validateJSON(schema: any, json: any = {}) {
    // const ajv = new Ajv({ allErrors: true, jsonPointers: true });
    // AjvError(ajv, { singleError: true })
    // AjvKeyWords(ajv, ['switch'])
    // const valid = ajv.validate(schema, json);
    // return {
    //     isValid: valid,
    //     message: ajv.errorsText()
    // }
  }
  async parseMessengeWithInfo(params: {
    message: string,
    info: any
  }) {
    let { message } = params
    const { info } = params
    const regex = /({|})/g
    const regex2 = /({{\w+}})|({{\w+(?:\.\w+)+)}}/g
    if (regex.test(message)) {
      const replaceText = message.match(regex2)
      for (let item of replaceText) {
        item = item.replace(regex, '');
        message = message.replace(item, _.get(info, item));
      }
      message = message.replace(regex, '')
    }
    return message
  }
  async encode(data: any) {
    const arr = this.encodeObject(data)
    return arr.join(':')
  }
  encodeObject(data: any): any[] {
    const arr = [];
    const keys = Object.keys(data)
    for (const key of keys) {
      let str;
      let arrobj = [];
      if (typeof (data[key]) == 'object') {
        arrobj = this.encodeObject(data[key]);
        for (const element of arrobj) {
          str = key + '.' + element;
          arr.push(str);
        }
      }
      else {
        str = key + '=' + data[key];
        arr.push(str);
      }
    }
    return arr;
  }
  async decode(data: any) {
    const arr1 = [];
    const arr2 = [];
    const arr = data.split(':');
    const arrElement = [];
    for (let item of arr) {
      if (/(\.\d\.)/g.test(item)) {
        let num = item.match(/(\.\d\.)/g).join();
        num = num.replace(/\./g, '');
        item = item.replace(/(\.\d)/g, '[' + num + ']')
      }
      else if (/(\.\d)/g.test(item)) {
        let num = item.match(/(\.\d)/g).join();
        num = num.replace(/\./g, '');
        item = item.replace(/(\.\d)/g, '[' + num + ']')
      }
      const element = item.split('=');
      arr1.push(element[0]);
      arr2.push(element[1]);
    }
    arrElement.push(arr1);
    arrElement.push(arr2);
    return arrElement;
  }

  convertViToEng(string: string) {
    const obj = {
      ??: 'D', ??: 'd', ??: 'a',
      ??: 'a', ??: 'e', ??: 'o', ??: 'o',
      ??: 'u',
      ??: 'a', ??: 'a', ???: 'a', ???: 'a', ??: 'a',
      ???: 'a', ???: 'a', ???: 'a', ???: 'a', ???: 'a',
      ???: 'a', ???: 'a', ???: 'a', ???: 'a', ???: 'a',
      ??: 'e', ??: 'e', ???: 'e', ???: 'e', ???: 'e',
      ???: 'e', ???: 'e', ???: 'e', ???: 'e', ???: 'e',
      ??: 'y', ???: 'y', ???: 'y', ???: 'y', ???: 'y',
      ??: 'u', ??: 'u', ???: 'u', ??: 'u', ???: 'u',
      ???: 'u', ???: 'u', ???: 'u', ???: 'u', ???: 'u',
      ??: 'i', ??: 'i', ???: 'i', ???: 'i', ??: 'i',
      ??: 'o', ??: 'o', ???: 'o', ??: 'o', ???: 'o',
      ???: 'o', ???: 'o', ???: 'o', ???: 'o', ???: 'o',
      ???: 'o', ???: 'o', ???: 'o', ???: 'o', ???: 'o'
    } as any;

    string = string.trim();
    string = string.toLowerCase();

    const arr = string.split('');

    for (const i in arr) {
      if (obj[arr[i]]) {
        arr[i] = obj[arr[i]];
      }
    }

    return arr.join('');
  }

  changeToSlug(title: string, prefix: string) {
    // ?????i ch??? hoa th??nh ch??? th?????ng
    let slug = title.toLowerCase();

    // ?????i k?? t??? c?? d???u th??nh kh??ng d???u
    slug = slug.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/gi, 'a');
    slug = slug.replace(/??|??|???|???|???|??|???|???|???|???|???/gi, 'e');
    slug = slug.replace(/i|??|??|???|??|???/gi, 'i');
    slug = slug.replace(/??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???/gi, 'o');
    slug = slug.replace(/??|??|???|??|???|??|???|???|???|???|???/gi, 'u');
    slug = slug.replace(/??|???|???|???|???/gi, 'y');
    slug = slug.replace(/??/gi, 'd');
    // X??a c??c k?? t??? ?????t bi???t
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    // ?????i kho???ng tr???ng th??nh k?? t??? g???ch ngang
    slug = slug.replace(/ /gi, "-");
    // ?????i nhi???u k?? t??? g???ch ngang li??n ti???p th??nh 1 k?? t??? g???ch ngang
    // Ph??ng tr?????ng h???p ng?????i nh???p v??o qu?? nhi???u k?? t??? tr???ng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    // X??a c??c k?? t??? g???ch ngang ??? ?????u v?? cu???i
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    return `${slug}-${prefix}`
  }


  convertViToEngSlug(string: string) {
    const obj = {
      ??: 'D', ??: 'd', ??: 'a',
      ??: 'a', ??: 'e', ??: 'o', ??: 'o',
      ??: 'u',
      ??: 'a', ??: 'a', ???: 'a', ???: 'a', ??: 'a',
      ???: 'a', ???: 'a', ???: 'a', ???: 'a', ???: 'a',
      ???: 'a', ???: 'a', ???: 'a', ???: 'a', ???: 'a',
      ??: 'e', ??: 'e', ???: 'e', ???: 'e', ???: 'e',
      ???: 'e', ???: 'e', ???: 'e', ???: 'e', ???: 'e',
      ??: 'y', ???: 'y', ???: 'y', ???: 'y', ???: 'y',
      ??: 'u', ??: 'u', ???: 'u', ??: 'u', ???: 'u',
      ???: 'u', ???: 'u', ???: 'u', ???: 'u', ???: 'u',
      ??: 'i', ??: 'i', ???: 'i', ???: 'i', ??: 'i',
      ??: 'o', ??: 'o', ???: 'o', ??: 'o', ???: 'o',
      ???: 'o', ???: 'o', ???: 'o', ???: 'o', ???: 'o',
      ???: 'o', ???: 'o', ???: 'o', ???: 'o', ???: 'o'
    } as any;

    string = string.trim();
    string = string.toLowerCase();

    const arr = string.split('');

    for (const i in arr) {
      if (obj[arr[i]]) {
        arr[i] = obj[arr[i]];
      }
    }

    let slug = arr.join('');
    slug = slug.replace(/ /g, '-');
    // slug = slug.replace(/[^a-zA-Z0-9]/g, '');
    return slug.replace(/[^a-zA-Z0-9\-]/g, '');
  }

  validateEmail(email: string) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  isEmpty(val: any) {
    return (val === undefined || val == undefined || val.length <= 0) ? true : false;
  }

  allEmpty(...val: any) {
    for (const item of val) {
      if (item !== undefined && item !== undefined) return false;
    }
    return true;
  }

  makeContent(content: string, values: any) {
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        const value = values[key];
        const re = new RegExp(`\\[${key}\\]`, 'g');
        content = content.replace(re, value);
      }
    }
    return content
  }
}
