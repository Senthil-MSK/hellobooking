import LoaderStyles from "./Loader";

type propsType = {
  text : String
}
// Loader Component
const Loader = (props: any) => {
  return (
    <LoaderStyles>
      <div className="loader">{props.text}</div>
    </LoaderStyles>
  )
}

export default Loader

