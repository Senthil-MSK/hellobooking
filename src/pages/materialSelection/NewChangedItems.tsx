import ImageGallery from "./ImageGallery";

import InfoIcon from "@mui/icons-material/Info";

import { ReactComponent as DownloadIcon } from "../../assets/images/icons/downloadIcon.svg";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import { useEffect, useState } from "react";
import MaterialTiles from "../../components/materialSelection/materialTiles";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";
import {
	materialDataSelector,
	isMaterialAccepted,
	materialAcceptLoading,
} from "../../redux/materialSelection/materialSelection.selectors";
import { materialSelectionActions } from "../../redux/materialSelection/materialSelection.actions";
import { userObject } from "../../redux/auth/auth.selectors";
import InfiniteScroll from "react-infinite-scroll-component";

const NewChangedItems = (props: any) => {
	const user: any = useAppSelector(userObject);
	const materialListData: any = useAppSelector(materialDataSelector);
	const materialAccepted: any = useAppSelector(isMaterialAccepted);
  const [hasMoreRecord, setHasMoreRecord] = useState(true);
	const [acceptedId, setAcceptedId] = useState<string>("");
	const [itemId, setItemId] = useState<string>("");
	const dispatch = useAppDispatch();
	const [materialDetails, setMaterialDetails] = useState<any>([]);

	// get api data
	const fetchData = (hideLoader: boolean) => {
		const payload = {
			projectId: user?.projectId,
			page: 1,
			hideLoader: hideLoader,
		};
		dispatch(materialSelectionActions.materialSelectionAPI(payload));
	};
	// fetch data on load
	useEffect(() => {
		if (materialListData) return;
		fetchData(false);
	}, []);
	// reset isaccepted after new data is fetched
	useEffect(() => {
		if (materialListData) {
			setAcceptedId("");
			setItemId("");
		}
	}, [materialListData]);
	// logic to show is accepted tile
	useEffect(() => {
		if (materialAccepted) {
			setAcceptedId(itemId);
			setTimeout(function () {
				fetchData(true);
			}, 2000);
		}
	}, [materialAccepted]);

	const [showGallery, setShowGallery] = useState(false);
	const [selectedVersionIndex, setSelectedVersionIndex] = useState(0);
	const [versionData, setVersionData] = useState(Object);

	const ImageGalleryHandler = () => {
		setShowGallery(true);
	};

	const handlePagination = () => {
		const payload = {
			projectId: user?.projectId,
			page: materialListData?.pagination.page + 1,
			hideLoader: false,
		};
		dispatch(materialSelectionActions.materialSelectionAPI(payload));
	};

	const acceptClickHandler = (id: string) => {
		setItemId(id);
		const payload = {
			projectId: user?.projectId,
			materialId: id,
			status: true,
		};
		dispatch(materialSelectionActions.materialSelectionAcceptChange(payload));
	};

	return (
		<div className="tabInnerContent">
			{showGallery && <ImageGallery onClose={setShowGallery} />}
			<div className="tabContentTop">
				<button className="tabsRightBtn">
					<DownloadIcon />
					Download Latest File
				</button>
				<div className="notificationbar">
					<InfoIcon />
					The new and changed items below need to be reviewed and accepted
					before they can be moved to the Awaiting sign-off list for final
					approval
				</div>
			</div>

			{/* Card Start */}
			{/* Card End */}
			{/* Card Start */}
			<InfiniteScroll
				dataLength={materialListData?.data?.length || 0}
				next={() => fetchData(true)}
				hasMore={hasMoreRecord}
				scrollableTarget="scrollableDiv"
				loader={
					<p style={{ textAlign: "center" }}>
						<b>Loading...</b>
					</p>
				}
				endMessage={
					!hasMoreRecord ? (
						<p style={{ textAlign: "center" }}>
							<b>---End of files---</b>
						</p>
					) : (
						<></>
					)
				}
			>
				{materialListData?.data?.map((item: any, itemIndex: number) => {
					return (
						<div className="materialCard" key={item.id + item.materialName}>
							<h3 className="materialTitle">{item?.title?.toLowerCase()}</h3>
							<MaterialTiles
								key={item?.id}
								item={item}
								ImageGalleryHandler={ImageGalleryHandler}
								itemIndex={itemIndex}
								flag={"New"}
								acceptClickHandler={acceptClickHandler}
								acceptedId={acceptedId}
								itemId={itemId}
								materialDetails={materialDetails}
								setMaterialDetails={setMaterialDetails}
							/>
						</div>
					);
				})}
			</InfiniteScroll>
			{/* Card End */}
			{/* Card Start */}

			{/* Card End */}
			{/* materialListData?.pagination?.totalPages */}
			{materialListData?.pagination?.page <
				materialListData?.pagination?.totalPages && (
				<div className="cardBottom">
					<button className="scollBtm" onClick={handlePagination}>
						<KeyboardDoubleArrowDownIcon />
					</button>
				</div>
			)}
		</div>
	);
};

export default NewChangedItems;
