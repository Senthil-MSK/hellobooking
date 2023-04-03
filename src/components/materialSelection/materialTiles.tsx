import ImagePath from "../../assets/images/temp/ItemPreview.png";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { InputLabel, MenuItem, Select } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Fragment, useEffect, useState, CSSProperties } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";
import { materialSelectionActions } from "../../redux/materialSelection/materialSelection.actions";
import { userObject } from "../../redux/auth/auth.selectors";
import { materialAcceptLoading } from "../../redux/materialSelection/materialSelection.selectors";
import BeatLoader from "react-spinners/BeatLoader";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
export default function MaterialTiles(props: any) {
	const {
		item,
		ImageGalleryHandler,
		itemIndex,
		flag,
		acceptClickHandler,
		acceptedId,
    itemId,
    groupItemIndex,
    materialDetails,
    setMaterialDetails,
    setCheckedId,
    checkedId,
    checkboxChange
	} = props;
	

  const acceptMaterialLoading: any = useAppSelector(materialAcceptLoading);
	const [showCheckBox, setShowCheckBox] = useState(false);
	const [showAcceptChange, setShowAcceptChange] = useState(false);

	const dispatch = useAppDispatch();
	const user: any = useAppSelector(userObject);

	const openMaterialDetails = (index: any) => {
		if (flag === "Awaiting") {
			if (materialDetails.indexOf(index) > -1) {
				setMaterialDetails(
					materialDetails.filter((ele: any) => ele !== index)
				);
			} else {
				setMaterialDetails([...materialDetails, index]);
			}
		}
	};
  

	const versionClickHandler = (itemIndex: number, versionId: string, groupItemIndex:any) => {
    let tempValue = groupItemIndex !== undefined ? `${groupItemIndex}_${itemIndex}` : itemIndex;
    if(materialDetails.indexOf(tempValue) === -1) {
      setMaterialDetails([...materialDetails, tempValue])
    }
		let payload = { index: itemIndex, materialId: versionId, type: flag, groupItemIndex: groupItemIndex };
		dispatch(materialSelectionActions.materialSelectionVersioning(payload));
	};
  console.log(checkedId, "checkedId")
	return (
		<>
			{item.id !== acceptedId && <div className={"cardInnerInfo"}>
				<div
					className="materialInfo"
					onClick={() => openMaterialDetails(groupItemIndex !== undefined ? `${groupItemIndex}_${itemIndex}` : itemIndex)}
				>
					<div className="materialInfoLeft">
						<div className="materialImage" onClick={ImageGalleryHandler}>
							<img src={ImagePath} alt="Product" />
						</div>
						<div className="materialInnerInfo">
							<div>{item.location}</div>
							<h4>
								{item?.model || "Dummy Material Title"}{" "}
								{item.tag && <span className="materialStatus">{item.tag}</span>}
							</h4>
							<div className="materialRate">
								<PaymentsOutlinedIcon />
								<span className="redText">
									{item.price ? "$" + item.price : "--"}{" "}
									<span className="smlText">(--/sq. ft.)</span>
								</span>
							</div>
						</div>
					</div>
					{flag === "New" && (
						<div className="acceptBtnWrap">
							<button
								type="button"
								onClick={() => acceptClickHandler(item.id)}
                disabled={acceptMaterialLoading}
								className={`blackBtn ${(!acceptMaterialLoading) ? "" : "disabled"}`}
							>
								{item.id !== itemId ? "Accept Changes": ""}
                {acceptMaterialLoading && item.id === itemId && <BeatLoader
                  color={"#ffffff"}
                  loading={true}
                  cssOverride={override}
                  size={15}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />}
							</button>
						</div>
					)}
					{flag === "Awaiting" && (
						<div>
							<label className="customCheckBox">
								<input
									type="checkbox"
                  checked={checkedId.indexOf(item.id) > -1}
									onChange={(e) => checkboxChange(e, item.id)}
								/>
								<span className="checkboxStyle"></span>
							</label>
						</div>
					)}
				</div>
				{(flag === "New" || (materialDetails.indexOf(groupItemIndex !== undefined ? `${groupItemIndex}_${itemIndex}` : itemIndex) > -1)) && (
					<Fragment>
						<div className="materialVersions">
							<div className="sideCol prevVersion">
								<button
									type="button"
									className={`linkStyleBtn leftAlign ${
										item.previousId ? "" : "disabled"
									}`}
									onClick={() =>
										versionClickHandler(itemIndex, item.previousId, groupItemIndex)
									}
								>
									<ArrowBackIosIcon />
									Previous Version
								</button>
							</div>
							<div className="">
								<InputLabel id="demo-simple-select-label">Date</InputLabel>
								<Select label="Date" value={item?.currentDate?.[0].value}>
									{item?.date?.map((item: any, index: number) => {
										return (
											<MenuItem key={item.value + index} value={item.value}>
												{item.label}
											</MenuItem>
										);
									})}
								</Select>
							</div>
							<div className="sideCol nextVersion">
								{item.nextId ? (
									<button
										type="button"
										className={`linkStyleBtn rightAlign ${
											item.nextId ? "" : "greenText"
										}`}
										onClick={() => versionClickHandler(itemIndex, item.nextId, groupItemIndex)}
									>
										Next Version
										<ArrowForwardIosIcon />
									</button>
								) : (
									<span className="linkStyleBtn rightAlign greenText">
										<TaskAltIcon />
										Latest Version
									</span>
								)}
							</div>
						</div>
						<div className="materialDetails">
							<div className="row">
								{item?.attributes?.map(
									(attribute: any, attributeIndex: number) => {
										if (attribute.type !== "link") {
											return (
												<div
													className="col colLeft"
													key={`attribute_${item.id}_index_${attributeIndex}`}
												>
													<label>{attribute.label}</label>
													<div
														className={`${
															attribute.isModify ? "greenText" : ""
														}`}
													>
														{attribute.value}
													</div>
												</div>
											);
										} else {
											return (
												<div className="col colLeft">
													<label>{attribute.label}</label>
													<a
														rel="noreferrer"
														target="_blank"
														href={attribute.value}
														className={`${
															attribute.isModify ? "greenText" : ""
														}`}
													>
														{attribute?.value?.substring(0, 50)}
														{attribute?.value?.length > 50 ? "..." : ""}
													</a>
												</div>
											);
										}
									}
								)}
							</div>
						</div>
					</Fragment>
				)}
			</div>}

			<div
				className={`materialCard ${
					item.id === acceptedId ? "fadeIn p-0" : "fadeOut"
				}`}
				key={item.id}
        
			>
				<div className="cardMessage acceptedCard">
					<TaskAltIcon /> Accepted and moved to the “Awaiting Sign-Off” section
				</div>
			</div>
		</>
	);
}
