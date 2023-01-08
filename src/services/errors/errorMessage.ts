export const ERROR_MESSAGE = {
  // DEFUALT DATABASE
  RECORD_NOT_FOUND: {
    message: {
      en: 'Record Not Found.',
      ko: '해당 기록이 없습니다.',
    },
    code: 500
  },

  // DEFUALT AUTH
  UNAUTHORIZED: {
    message: {
      en: 'Unauthorized.',
      ko: '허가받지 않은.',
    },
    code: 401
  },
  YOU_NOT_PERMISSIONS: {
    message: {
      en: 'You are not permissions.',
      ko: '접근 권한이 없습니다.',
    },
    code: 401
  },
  TOKEN_EXPIRED: {
    message: {
      en: 'Token Expried.',
      ko: '토큰이 만료되었습니다.',
    },
    code: 401
  },
  USER_BLOCK: {
    message: {
      en: 'User Blocked.',
      ko: '본 계정이 차단되었습니다. teamscare123@gmail.com 으로 관리자와 연락해주시기 바랍니다.',
    },
    code: 401
  },
  BAD_TOKEN: {
    message: {
      en: 'Bad Token.',
      ko: '나쁜 토큰.',
    },
    code: 401
  },

  // DEFUALT ROUTER
  SORRY_SOMETHING_WENT_WRONG: {
    message: {
      en: 'Sorry! Something went wrong.',
      ko: '에러. 문제가 발생했습니다.',
    },
    code: 500
  },
  THE_API_NOT_SUPPORTED: {
    message: {
      en: 'The API is not supported.',
      ko: 'API 지원하지 않습니다.',
    },
    code: 500
  },
  BAD_REQUEST: {
    message: {
      en: 'Bad Request.',
      ko: '잘못된 요청입니다.',
    },
    code: 400
  },

  // USER
  USERNAME_ALREADY_REGISTERED: {
    message: {
      en: 'Username already registered.',
      ko: '이미 가입된 이메일입니다.',
    },
    code: 400
  },
  ACCOUNT_HAS_BEEN_DELETED: {
    message: {
      en: 'This account has been deleted. Check back with your manager.',
      ko: '본 계정이 삭제되었습니다. 관리자와 다시 확인하세요.',
    },
    code: 401
  },
  ACCOUNT_HAS_BEEN_BLOCKED: {
    message: {
      en: 'This account has been blocked.',
      ko: '이 계정이 차단되었습니다.',
    },
    code: 403
  },
  ACCOUNT_DOES_NOT_EXIST: {
    message: {
      en: 'Account does not exist.',
      ko: '회원 정보가 없습니다.',
    },
    code: 404
  },
  ACCOUNT_DOES_NOT_EXIST_IN_APP: {
    message: {
      en: 'Account does not exist in app.',
      ko: '존재하지 않는 이메일입니다.',
    },
    code: 404
  },
  ACCOUNT_DOES_NOT_EXIST_IN_CMS: {
    message: {
      en: 'Account does not exist in cms.',
      ko: '존재하지 않는 이메일입니다.',
    },
    code: 404
  },
  THIS_ACCOUNT_IS_SNS: {
    message: {
      en: 'This account is an account logged in through SNS.',
      ko: '본 계정은 SNS로 로그인된 계정입니다.',
    },
    code: 400
  },
  THIS_ACCOUNT_IS_APPLE: {
    message: {
      en: 'This account is an account logged in through APPLE.',
      ko: '본 계정은 APPLE로 로그인된 계정입니다.',
    },
    code: 400
  },
  THIS_ACCOUNT_IS_PHONE: {
    message: {
      en: 'This account is an account logged in through PHONE.',
      ko: '본 계정은 PHONE로 로그인된 계정입니다.',
    },
    code: 400
  },
  THIS_ACCOUNT_IS_NAVER: {
    message: {
      en: 'This account is an account logged in through NAVER.',
      ko: '본 계정은 NAVER로 로그인된 계정입니다.',
    },
    code: 400
  },
  THIS_ACCOUNT_IS_KAKAOTALK: {
    message: {
      en: 'This account is an account logged in through KAKAOTALK.',
      ko: '본 계정은 KAKAOTALK로 로그인된 계정입니다.',
    },
    code: 400
  },
  THIS_ACCOUNT_IS_GOOGLE: {
    message: {
      en: 'This account is an account logged in through GOOGLE.',
      ko: '본 계정은 GOOGLE로 로그인된 계정입니다.',
    },
    code: 400
  },
  THIS_ACCOUNT_IS_INAPP: {
    message: {
      en: 'This account is an account logged in through INAPP.',
      ko: '해당 이메일은 이미 다른 계정으로 가입된 이메 일입니다.',
    },
    code: 400
  },
  PASSWORD_IS_SAME: {
    message: {
      en: 'The password is the same You cannot reuse an existing password as a new password.',
      ko: '비밀번호가 같습니다기존 비밀번호를 새 비밀번호로 재사용하실 수 없습니다.',
    },
    code: 400
  },
  WRONG_PASSWORD: {
    message: {
      en: 'Wrong password.',
      ko: '비밀번호가 올바르지 않습니다.',
    },
    code: 400
  },
  PHONE_ALREADY_REGISTERED: {
    message: {
      en: 'Phone already registered.',
      ko: '이미 등록된 휴대폰입니다.',
    },
    code: 400
  },
  INVALID_ACCOUNT_TYPE: {
    message: {
      en: 'Invalid account type.',
      ko: '역할이 잘못되었습니다.',
    },
    code: 403
  },
  LOGIN_TYPE_NOT_SUPPORT: {
    message: {
      en: 'Login type not support.',
      ko: '로그인 타입이 지원되지 않습니다.',
    },
    code: 501
  },
  THIS_USER_HAS_ALREADY_QUIT_CANT_NOT_EDIT_THE_INFORMATION: {
    message: {
      en: "This user has already quit, so I can't edit the information.",
      ko: '이미 탈퇴된 회원이라서 정보를 수정불가능합니다.',
    },
    code: 400
  },

  // EMAIL
  EMAIL_HAS_NOT_BEEN_SIGNED_UP_YET: {
    message: {
      en: 'This email has not been signed up yet. Please try again.',
      ko: '아직 가입되지 않은 이메일입니다. 다시 시도하세요.',
    },
    code: 400
  },
  EMAIL_ALREADY_REGISTERED: {
    message: {
      en: 'Email already registered.',
      ko: '이미 가입된 이메일입니다.',
    },
    code: 400
  },
  EMAIL_LOGIN_ANOTHOR_SNS: {
    message: {
      en: 'Email login another SNS.',
      ko: '다른 SNS로 로그인된 이메일입니다.',
    },
    code: 400
  },
  EMAIL_LOGIN_INAPP: {
    message: {
      en: 'Email login INAPP.',
      ko: '일반회원으로 가입된 이메일입니다.',
    },
    code: 400
  },
  EMAIL_ALREADY_EXISTS: {
    message: {
      en: 'Email already exists.',
      ko: '이미 가입된 이메일입니다.',
    },
    code: 400
  },
  INVALID_EMAIL: {
    message: {
      en: 'Invalid email.',
      ko: '이메일 양식이 맞지 않습니다.',
    },
    code: 400
  },
  EMAIL_FORM_INCORRECT: {
    message: {
      en: 'Email form is incorrect. Please try again.',
      ko: '이메일 양식이 맞지 않습니다. 다시 시도하세요.',
    },
    code: 400
  },
  // VALIDATE
  PLEASE_DOUBLE_CHECK_SECERT_CODE: {
    message: {
      en: 'The verification code does not match. Please check again.',
      ko: '인증번호가 일치하지 않습니다. 다시 확인해주세요.',
    },
    code: 413
  },
  VALIDATION_IS_ON_PHONE_FAILED: {
    message: {
      en: 'Your phone is wrong.',
      ko: '휴대폰이 잘못되었습니다.',
    },
    code: 400
  },
  TIMEOUT_HAS_EXPIRED: {
    message: {
      en: 'The verification code has expired.',
      ko: '인증번호가 만료되었습니다.',
    },
    code: 501
  },
  // RECORD
  RECORD_ALREADY_EXISTS: {
    message: {
      en: 'There is a registered record. Are you sure you want to edit?',
      ko: '등록된 기록이 있습니다. 수정하시겠습니까?',
    },
    code: 400
  },
  RECORD_FROM_PAST_TO_PRESENT: {
    message: {
      en: 'Can only record from the past to the present.',
      ko: '금일까지만 기록가능합니다',
    },
    code: 400
  },
  // CHALLENGE

  CHALLENGE_DOES_NOT_EXIST: {
    message: {
      en: 'This challenge does not exist.',
      ko: '이 챌린지가 존재하지 않습니다.',
    },
    code: 404
  },
  CHALLENGE_IS_OVER: {
    message: {
      en: 'The challenge is over.',
      ko: '모집종료가 되었습니다.',
    },
    code: 404
  },
  USER_POINT_ENOUGH_TO_JOIN_CHALLENGE: {
    message: {
      en: 'Your points are not enough to join challenge.',
      ko: '포인트가 부족해서 챌린지에 참여할 수 없습니다. 포인트 획득 후 신청해주세요.',
    },
    code: 403
  },
  EACH_USER_CANNOT_PARTICIPATE_IN_MORE_THAN_5_CHALLNGES_AT_THE_SAME_TIME: {
    message: {
      en: 'Each user cannot participate in more than 5 challenges at the same time.',
      ko: '최대 5개의 챌린지에 참여할 수 있습니다.',
    },
    code: 403
  },
  FULL_CHALLENGERS: {
    message: {
      en: 'Full of challengers.',
      ko: '최대 참여자 수 도달되어서 모집종료가 되었습니다.',
    },
    code: 403
  },
  USER_HAVE_NOT_PARTICIPATED_CHALLENGE: {
    message: {
      en: 'I have not participated in this challenge yet.',
      ko: '본 챌린지에 아직 참여하지 않았습니다.',
    },
    code: 403
  },
  USER_PARTICIPATED_CHALLENGE_BEFORE: {
    message: {
      en: 'You have already participated in this challenge.',
      ko: '본 챌린지에 이미 참여하였습니다.',
    },
    code: 403
  },
  CHALLENGE_DOES_NOT_TAKE_PLACE_TODAY: {
    message: {
      en: 'Today is not the certification day for this challenge.',
      ko: '오늘은 본 챌린지의 인증요일이 아닙니다.',
    },
    code: 400
  },
  COMPLETED_CHALLENGE_TODAY: {
    message: {
      en: 'Verification completed today.',
      ko: '오늘 인증완료하였습니다.',
    },
    code: 403
  },
  INVALID_CHALLENGE_TIME: {
    message: {
      en: 'Invalid challenge time.',
      ko: '인증기간 또는 인증요일이 아입니다.',
    },
    code: 400
  },
  CANNOT_JOIN_CHALLENGE_RIGHT_NOW_BECAUSE_CLOSED: {
    message: {
      en: 'Can not join the challenge now because it is closed.',
      ko: '모집종료된 챌린지이라서 차여불가능합니다.',
    },
    code: 403
  },
  CANNOT_JOIN_CHALLENGE_RIGHT_NOW_BECAUSE_COMPLETED: {
    message: {
      en: 'Can not join the challenge now because it is completed.',
      ko: '모집종료된 챌린지이라서 차여불가능합니다.',
    },
    code: 403
  },
  CAN_ONLY_JOIN_CHALLENGE_WHEN_OPEN: {
    message: {
      en: 'You can only join the challenge when it is open.',
      ko: '모집중인 팰린지에만 참여가능합니다.',
    },
    code: 403
  },
  CANNOT_DONE_CHALLENGE_RIGHT_NOW_BECAUSE_CLOSED: {
    message: {
      en: 'Can not done the challenge now because it is closed.',
      ko: '인증종료된 챌린지이라서 인증불가능합니다.',
    },
    code: 403
  },
  CANNOT_DONE_CHALLENGE_RIGHT_NOW_BECAUSE_COMPLETED: {
    message: {
      en: 'Can not done the challenge now because it is completed.',
      ko: '인증종료된 챌린지이라서 인증불가능합니다.',
    },
    code: 403
  },
  CAN_ONLY_DONE_CHALLENGE_WHEN_OPEN_OR_ONGOIG: {
    message: {
      en: 'You can only done the challenge when it is ongoing.',
      ko: '인증기간중인 챌린지만 인증가능합니다.',
    },
    code: 403
  },
  THIS_CHALLENGE_PROOF_HAS_BEEN_REMOVED: {
    message: {
      en: 'This challenge proof has been removed.',
      ko: '본 인증이 삭제되었습니다.',
    },
    code: 401
  },
  THIS_CHALLENGE_PROOF_HAS_BEEN_KEPT_PRIVATE: {
    message: {
      en: 'This challenge proof has been kept private.',
      ko: '본 인증이 비공개처리되었습니다.',
    },
    code: 401
  },
  // COMPLETION METHOD
  COMPLETION_METHOD_ONLY_VIDEO_OR_ONLY_PHOTO: {
    message: {
      en: 'The completion method can only be a video or it can only be a photo.',
      ko: '영상 또는 이미지만 첨부하여 인증가능합니다.',
    },
    code: 400
  },
  MAXIMUM_COMPLETION_METHOD_ONE_VIDEO: {
    message: {
      en: 'The maximum completion method is one video.',
      ko: '최대 첨부가능한 영상이 1개만 입니다.',
    },
    code: 400
  },
  MAXIMUM_COMPLETION_METHOD_FIVE_IMAGES: {
    message: {
      en: 'The maximum completion method is five images.',
      ko: '총 5장까지 등록가능합니다.',
    },
    code: 400
  },
  // GIFT
  GIFT_NOT_ENOUGH: {
    message: {
      en: 'The giftbox not enough.',
      ko: '당일 획득 가능한 선물상자가 없어졌습니다.',
    },
    code: 400
  },
  // ALARM
  NOTI_ONLY_OR_VIBRANTION_ONLY_OR_RINGTONE_ONLY_ALARM: {
    message: {
      en: 'Notification-only or vibration-only or ringtone-only alarm.',
      ko: '알람형태는 푸시알람(무음), 소리알람, 진동알람 중 1개만 선택해주세요.',
    },
    code: 400
  },
  // PRODUCT
  USER_POINT_ENOUGH_TO_EXCHANGE_PRODUCT: {
    message: {
      en: 'Your points are not enough to exchange the product.',
      ko: '포인트가 부족해서 본 사품을 구매할 수 없습니다.',
    },
    code: 403
  },

  // REQUEST CACHE
  REQUEST_HAS_BEEN_APPROVED_BEFORE: {
    message: {
      en: 'Request has been rejected before.',
      ko: '본 요청은 이미 반려처리되었습니다.',
    },
    code: 400
  },
  REQUEST_HAS_BEEN_REJECTED_BEFORE: {
    message: {
      en: 'Request has been approved before.',
      ko: '본 요청은 이미 승인처리되었습니다.',
    },
    code: 400
  },

  // POINT
  USER_POINT_NOT_ENOUGH_TO_DEDUCT_POINTS: {
    message: {
      en: "User's points are not enough to deduct points.",
      ko: '해당 회원의 인트는 조절요청 포인트보다 더 작습니다.',
    },
    code: 400
  },


  // FEEDBACK
  ONLY_UP_TO_TWO_FEEDBACK_PER_DAY_FOR_EACH_FEEDBACK_TYPE: {
    message: {
      en: "Only up to two feedback can be created per day for each feedback type.",
      ko: '하나의 카테고리에 최대 2개 피드백을 받을 수 있습니다.',
    },
    code: 400
  },

  // ARTICLE
  EXISTED_TERM_PUBLIC_BEFORE: {
    message: {
      en: "The title of these Terms and Conditions has already been disclosed. Would you like to make the existing case private and change this bulletin board to public?",
      ko: '본 약관 제목은 이미 공개되고 있는 내용이 있는데 기존 건을 비공개처리하고 이 게시판을  공개로 변경하시겠습니까?',
    },
    code: 400,
    key: 'existed_term_public_before'
  },
  CANNOT_UPDATE_THIS_TERM_TO_PRIVATE: {
    message: {
      en: "These terms and conditions cannot be processed privately. If you wish to keep these Terms and Conditions private, please create a new Terms and Conditions post with the same title and make the existing Terms and Conditions private by selecting Publish.",
      ko: '본 약관은 비공개 처리 불가능합니다. 본 약관을 비공개처하려면 같은 제목으로 새 약관 게시물을 작성하여 공개를 선택하면서 기존 약관을 비공개처리해주시기 바랍니다.',
    },
    code: 400,
  },

  // PUSH SETTING
  THE_START_TIME_MUST_BE_LESS_THAN_THE_END_TIME: {
    message: {
      en: "The start time must be set before the end time.",
      ko: '시작시간은 종료시간 이전 설정되어야 합니다.',
    },
    code: 400,
  }
}


