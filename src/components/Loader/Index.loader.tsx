import LoaderStyles from "./loader";
// ----- Export for Loader -----
export default function CustomLoader(props: any) {
  return (
    <LoaderStyles style={props.isLoading ? {display: "block"} : {display: "none"}}>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </LoaderStyles>
  )
}
