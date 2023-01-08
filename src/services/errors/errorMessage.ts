export const ERROR_MESSAGE = {
  // DEFUALT DATABASE
  RECORD_NOT_FOUND: {
    message: {
      vi: 'Không tìm thấy bản ghi tương ứng.',
      en: 'Record Not Found.',
      ko: '해당 기록이 없습니다.',
    },
    code: 500
  },

  // DEFUALT AUTH
  UNAUTHORIZED: {
    message: {
      vi: 'Không được phép.',
      en: 'Unauthorized.',
      ko: '허가받지 않은.',
    },
    code: 401
  },
  YOU_NOT_PERMISSIONS: {
    message: {
      vi: 'Bạn không đủ quyền.',
      en: 'You are not permissions.',
      ko: '접근 권한이 없습니다.',
    },
    code: 401
  },
  TOKEN_EXPIRED: {
    message: {
      vi: 'Token hết hạn.',
      en: 'Token Expried.',
      ko: '토큰이 만료되었습니다.',
    },
    code: 401
  },
  BAD_TOKEN: {
    message: {
      vi: 'Token không đúng.',
      en: 'Bad Token.',
      ko: '나쁜 토큰.',
    },
    code: 401
  },

  // DEFUALT ROUTER
  SORRY_SOMETHING_WENT_WRONG: {
    message: {
      vi: 'Xin lỗi, có gì đó không đúng.',
      en: 'Sorry! Something went wrong.',
      ko: '에러. 문제가 발생했습니다.',
    },
    code: 500
  },
  THE_API_NOT_SUPPORTED: {
    message: {
      vi: 'API không còn hổ trợ.',
      en: 'The API is not supported.',
      ko: 'API 지원하지 않습니다.',
    },
    code: 500
  },
  BAD_REQUEST: {
    message: {
      vi: 'Yêu cầu sai.',
      en: 'Bad Request.',
      ko: '잘못된 요청입니다.',
    },
    code: 400
  },
}


