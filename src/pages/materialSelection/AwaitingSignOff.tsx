import React, { Fragment, useEffect, useState } from 'react';

import InfoIcon from '@mui/icons-material/Info';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RestoreIcon from '@mui/icons-material/Restore';

import {ReactComponent as DownloadIcon} from '../../assets/images/icons/downloadIcon.svg';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import ImagePath from '../../assets/images/temp/ItemPreview.png';
import MaterialTiles from '../../components/materialSelection/materialTiles';
import {data1} from "./data";
import { useAppDispatch, useAppSelector } from '../../redux/store/store';
import { userObject } from '../../redux/auth/auth.selectors';
import { materialListAwaitingData, materialSavedCount, isMaterialSaved, materialSavedList } from '../../redux/materialSelection/materialSelection.selectors';
import { materialSelectionActions } from '../../redux/materialSelection/materialSelection.actions';


let tabs: any[] = [
  // {
  //   key: '1',
  //   label: `Tiles`,
  // },
  // {
  //   key: '2',
  //   label: `Stone`,
  // },
  // {
  //   key: '3',
  //   label: `Plumbing`,
  // },
  // {
  //   key: '4',
  //   label: `Appliances`,
  // },
  // {
  //   key: '5',
  //   label: `Lighting`,
  // },
  // {
  //   key: '6',
  //   label: `Doors`,
  // },
  // {
  //   key:'7',
  //   label:`Flooring`,
  // },
  // {
  //   key:'8',
  //   label:`Millwork/ Finish Carpentry`
  // },{
  //   key:"9",
  //   label:`Glazing`
  // },{
  //   key:"10",
  //   label:`Painting`
  // }
];


const NewChangedItems = () => {
  const [materialDetails, setMaterialDetails] = useState<any>([]);
  const [confirmRemoveItem, setConfirmRemoveItem] = useState<boolean>(false);
	const [checkedId, setCheckedId] = useState<string[]>([]);
  const savedCount = useAppSelector<any>(materialSavedCount);
  const isSaved = useAppSelector<any>(isMaterialSaved);
  const savedList = useAppSelector<any>(materialSavedList);
  const [reviewNsign, setReviewNsign] = useState(false);

  let filter :any = [
    {
      "label": "ALL",
      "value": "ALL"
    },

  ]
  const [data, setData] = useState<any>(data1.data);
	const [showGallery, setShowGallery] = useState(false);
	const [showReview, setShowReview] = useState(false);
	const [selectedId, setSelectedId] = useState("");
	const [selectedVersionIndex, setSelectedVersionIndex] = useState(0);
	const [versionData,setVersionData] = useState(Object);
  const [selectedTab,setSelectedTab] = useState({key: "", label: ""});
  const [filterState,setFilterState] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const user: any = useAppSelector(userObject);
  const materialListAwaitingOffData: any = useAppSelector(materialListAwaitingData);
  
  const reviewNsignHandler = () => {
    setShowReview(true);
    const payload = { projectId: user?.projectId};
    dispatch(materialSelectionActions.materialSelectionReviewList(payload));
  }
  useEffect(() => {
    if (materialListAwaitingOffData) return;
    const payload = { projectId: user?.projectId, page: 1 };
    dispatch(materialSelectionActions.matrialselectionAwaitingSignOffListAction(payload));
    const savedListpayload = { projectId: user?.projectId};
    dispatch(materialSelectionActions.materialSelectionReviewList(savedListpayload));
  }, []);

  useEffect(() => {
    if(savedList?.data?.length){
      var selectedIds: string[] = []
      savedList.data.forEach((list: any) => {
        return list.details.forEach((detail: any) => {
          selectedIds.push(detail.id)
          
        })
      })
      setCheckedId(selectedIds);
    }
  }, [savedList])
  useEffect(()=>{
    if(materialListAwaitingOffData?.filter){
      filter = [...filter,...materialListAwaitingOffData?.filter]
      tabs = [...materialListAwaitingOffData?.tabs]
    }
    // console.log(materialListAwaitingOffData.pagination,122)
  },[filter, materialListAwaitingOffData])

	useEffect(() => {
		if(Object.keys(versionData).length > 0){
			let tempData = [...data];
			tempData[selectedVersionIndex] = {...versionData.data[0]};
			setVersionData({});
			setData(tempData);
		}
	}, [versionData])


  useEffect(()=>{
    setSelectedTab(tabs[0])
    setFilterState(filter.map((ele:any) =>{ return ele.label} ))
  },[]);

	const ImageGalleryHandler = () => {
		setShowGallery(true);
	};

  const handeleFilterClick = (ele:string) =>{
    if(ele === "ALL" && filterState.indexOf(ele) === -1){
       setFilterState(filter.map((ele:any) =>{ return ele.value} ));
     return
    }
    if (filterState.indexOf(ele) > -1 && ((filterState.length - 1) !== 0)){
       setFilterState(filterState.filter((e)=> e !== ele && e !== "ALL"))
    }else if(filterState.indexOf(ele) === -1){
     if((filterState.length + 1) === filter.length){
       setFilterState(filter.map((ele:any) =>{ return ele.value} ))
     }else {
       setFilterState([...filterState, ele])
     }
    }
   }

   const checkboxChange = (e: React.ChangeEvent<HTMLElement>, id: string) => {
		e.stopPropagation();
		var payload = {
			id: id,
			status: checkedId.indexOf(id) === -1 ? true : false
		}
		if(checkedId.indexOf(id) === -1) {
			setCheckedId([...checkedId, id]);
		}else {
			setCheckedId(checkedId.filter(ele => ele !== id));
		}
		dispatch(materialSelectionActions.materialSelectionReviewSave(payload))
	};
  
  const removeItemHander = (e:any,id:any) => {
    setConfirmRemoveItem(true)
    // console.log(id,174)
    setSelectedId(id);
  }

  const closeShowReview = () => {
    setShowReview(false);
  }

  const closeRemoveItemHander = () => {
    setConfirmRemoveItem(false);
  }

  const RemoveItemHander = () =>{
    setConfirmRemoveItem(false);
    if(selectedId){
      var payload = {
        	id: selectedId,
        	status: false
        }
        dispatch(materialSelectionActions.materialSelectionReviewSave(payload));
        const savedListpayload = { projectId: user?.projectId};
        dispatch(materialSelectionActions.materialSelectionReviewList(savedListpayload));

    }

  }

  const handlePagination = () => {
    const payload = {
      projectId: user?.projectId,
      page: materialListAwaitingOffData?.pagination.page + 1,
			// hideLoader: false
    };
    dispatch(materialSelectionActions.matrialselectionAwaitingSignOffListAction(payload));
  };



  return <div className='tabInnerContent materialCardStyle' >
    <div className='tabContentTop' >
      <button className='tabsRightBtn' ><DownloadIcon />Download Latest File</button>
      {!showReview && savedList?.data.length && <div className='notificationbar' ><InfoIcon />Review, select and sign the items below</div>}
    </div>
    {!showReview && savedList?.data.length && <>
    <div className='innerTabs' >
      {tabs.map((ele)=>{
        return <button type="button" className={`tabItem${ele.key === selectedTab?.key ? " active" : ""}`}>{ele.label}</button>
      })}  
    </div>
    <div className='materialTags' >
      {filter.map((ele:any)=>{
        return <button type="button" className={`btnTag${filterState.indexOf(ele.value) > -1 ? " selected" : ""}`} onClick={()=>handeleFilterClick(ele.value)}>{ele.label}</button>
      })}
    </div>
    {/* Card Start */}
{materialListAwaitingOffData?.data?.map((groupItem: any, groupItemIndex: number) => {
  return(
    <div className='materialCard' key={`material_group_${groupItemIndex}`}>
      <h3 className='materialTitle' >{groupItem?.room}</h3>
      <div className='' >
      {groupItem?.details?.map((item: any, itemIndex: number) => {
                return (
                  <MaterialTiles
                    key={item?.id}
                    item={item}
                    ImageGalleryHandler={ImageGalleryHandler}
                    itemIndex={itemIndex}
                    flag={"Awaiting"}
                    groupItemIndex={groupItemIndex}
                    materialDetails={materialDetails}
                    setMaterialDetails={setMaterialDetails}
                    checkboxChange={checkboxChange}
                    checkedId={checkedId}
                  />
                );
              })}
                
            </div>
          </div>
      )})}
      <div className='cardBottom' >
      <button className='scollBtm' ><KeyboardDoubleArrowDownIcon /></button>
    </div>
    {/* {materialListAwaitingOffData?.pagination?.page <
        materialListAwaitingOffData?.pagination?.totalPages && (
        <div className="cardBottom">
          <button className="scollBtm" onClick={handlePagination}>
            <KeyboardDoubleArrowDownIcon />
          </button>
        </div>
      )} */}


    <div className='bottomBtnWrap' ><button onClick={reviewNsignHandler} className='blackBtn' >Review & Sign Selected Items ({savedCount})</button></div>
  </>}
    {/* Card End */}
    
    {/* Sign Itmes Section */}
      {showReview && savedList?.data.length && <div className='signItems materialCardStyle' >
        <div className='signItemsHeader' >
          <button className='backArrow' onClick={closeShowReview}></button>
          <h3>Material Selection Sign Off Summary</h3>
        </div>
        <div className='materialTags' >
          {savedList?.filter?.map((filter: {label: string, value: string}) => {
            return <button className='btnTag'>{filter.label}</button>
          })}
        </div>
        <div className='minHeightBox' >
          {savedList.data.map((singleMaterial: any)=> {
           return  <div className='materialCard' >
           <h3 className='materialTitle' >{singleMaterial.room}</h3>
           {singleMaterial.details.map((groupMaterialList: any) => {
              return <div className='cardInnerInfo' >
              <div className='materialInfo'>
              <div className='materialInfoLeft' >
                  <div className='materialImage' ><img src={groupMaterialList.picture?.[0] || ImagePath} /></div>
                  <div className='materialInnerInfo' >
                    <div>{groupMaterialList.location}</div>
                    <h4>{groupMaterialList.model}</h4>
                    <div className='materialRate' ><PaymentsOutlinedIcon /><span>$-- <span className='smlText' >($--/sq. ft.)</span></span></div>
                  </div>
              </div>
              <div>
                  <button onClick={(e)=>removeItemHander(e,groupMaterialList.id)}  className='removeBtn' ></button>
              </div>
              </div>
          </div>
           })}
           
         </div>
          })}
      
        </div>
        <div className='itemsFooter' >
          <div>Total Items: <span className='normalText' >{savedCount}</span></div>
          <div>Total Items Cost: <span className='normalText'>$--.--</span></div>
        </div>
        <div className='bottomBtnWrap' ><button className='blackBtn' >Sign Items (3)</button></div>
      </div>}
      {/* Remove Item Modal */}
      {confirmRemoveItem &&
      <div className='modalWrapper' >
        <div className='modalOverlay' onClick={closeRemoveItemHander} ></div>
        <div className='modalContent' >
          <h3 className='modalTitle'>Remove item from list?</h3>
          <div className='modalBtnWrap' >
            <button onClick={closeRemoveItemHander} className='linkStyleBtn' >Cancel</button>
            <button className='blackBtn' onClick={(e:any)=>RemoveItemHander()}>Remove</button>
          </div>
        </div>
      </div>
      }
  </div>
}
  

  export default NewChangedItems;