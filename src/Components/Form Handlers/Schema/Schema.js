// for some reason exporting this isn't working on the other pages

import * as yup from "yup"

export default yup.object().shape({
  size: yup
    .string()
    .required('Pick a size')
    .oneOf(['Personal','Small','Medium','Large','XLarge']),
  sauce: yup
  .string()
  .required('Pick a sauce'),
  pep: yup.boolean(),
  ham: yup.boolean(),
  bacon:yup.boolean(),
  ckn: yup.boolean(),
  cbcn: yup.boolean(),
  ssg: yup.boolean(),
  spin: yup.boolean(),
  oni: yup.boolean(),
  instructions: yup.string()
})