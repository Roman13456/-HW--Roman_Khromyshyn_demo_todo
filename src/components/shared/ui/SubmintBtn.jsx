import { useFormikContext } from "formik"
const SubmitBtn = ()=>{
    const formikCtx = useFormikContext()
    return (
        <button type="submit" disabled={!formikCtx.isValid || !formikCtx.dirty || formikCtx.isSubmitting}>save</button>
    )
}
export default SubmitBtn