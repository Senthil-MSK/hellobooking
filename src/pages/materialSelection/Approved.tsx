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

const Approved = (props:any) => {
  
  const [reviewNsign, setReviewNsign] = useState(false);

  const tabs = [
    {
      key: '1',
      label: `Tiles`,
    },
    {
      key: '2',
      label: `Stone`,
    },
    {
      key: '3',
      label: `Plumbing`,
    },
    {
      key: '4',
      label: `Appliances`,
    },
    {
      key: '5',
      label: `Lighting`,
    },
    {
      key: '6',
      label: `Doors`,
    },
    {
      key:'7',
      label:`Flooring`,
    },
    {
      key:'8',
      label:`Millwork/ Finish Carpentry`
    },{
      key:"9",
      label:`Glazing`
    },{
      key:"10",
      label:`Painting`
    }
  ];

  const filter = [
    {
      key: '1',
      label: `All`,
    },
    {
      key: '2',
      label: `Kitchen`,
    },{
      key: '3',
      label: `Master Bathroom`,
    },
    {
      key: '4',
      label: `Bathroom`,
    },
    {
      key: '5',
      label: `Powder Room`,
    }
  ]

  const [data, setData] = useState<any>(data1.data);
	const [showGallery, setShowGallery] = useState(false);
  const [materialDetails, setMaterialDetails] = useState<any>([]);
	const [selectedVersionIndex, setSelectedVersionIndex] = useState(0);
	const [versionData,setVersionData] = useState(Object);
  const [selectedTab,setSelectedTab] = useState({key: "", label: ""});
  const [filterState,setFilterState] = useState<string[]>([]);


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
    setFilterState(filter.map((ele) =>{ return ele.label} ))
  },[]);


	const ImageGalleryHandler = () => {
		setShowGallery(true);
	};
	const versionClickHandler = (index: number, versionId: string) => {
		setSelectedVersionIndex(index);
		// dispatch version api call
		// setVersionData(prevData);
	}

  const items = [
    {
      label: <button className='versionDate' >13 Apr, 2022 <span>(Latest)</span></button>,
      key: '0',
    },
    {
      label: <button className='versionDate'>10 Apr, 2022</button>,
      key: '1',
    },
    {
      label: <button className='versionDate'>2 Apr, 2022</button>,
      key: '2',
    },
  ];

  const reviewNsignHandler = () => {
    setReviewNsign(true)
  }

  const CustomCheckBox = (e:any) => {
    e.stopPropagation()
  }
  const handeleFilterClick = (ele:string) =>{
   if(ele === "All" && filterState.indexOf(ele) === -1){
      setFilterState(filter.map((ele) =>{ return ele.label} ));
    return
   }
   if (filterState.indexOf(ele) > -1 && ((filterState.length - 1) !== 0)){
      setFilterState(filterState.filter((e)=> e !== ele && e !== "All"))
   }else if(filterState.indexOf(ele) === -1){
    if((filterState.length + 1) === filter.length){
      setFilterState(filter.map((ele) =>{ return ele.label} ))
    }else {
      setFilterState([...filterState, ele])
    }
   }
  }
  
  return <div className='tabInnerContent materialCardStyle' >
    <div className='tabContentTop' >
      <button className='tabsRightBtn' ><DownloadIcon />Download Latest File</button>
    </div>

    <div className='innerTabs' >
      {/* <button className='tabItem active' >Tiles</button>
      <button className='tabItem' >Stone</button>
      <button className='tabItem' >Plumbing</button>
      <button className='tabItem' >Appliances</button>
      <button className='tabItem' >Lighting</button>
      <button className='tabItem' >Doors</button>
      <button className='tabItem' >Flooring</button>
      <button className='tabItem' >Millwork/ Finish Carpentry</button>
      <button className='tabItem' >Glazing</button>
      <button className='tabItem' >Painting</button> */}
      {tabs.map((ele,index)=>{
        return <button type="button" className={`tabItem${ele.key === selectedTab?.key ? " active" : ""}`}>{ele.label}</button>
      })}  
    </div>
    <div className='materialTags' >
      {/* <button className='btnTag'>All</button>
      <button className='btnTag'>Kitchen</button>
      <button className='btnTag selected'>Master Bathroom</button>
      <button className='btnTag selected'>Bathroom</button>
      <button className='btnTag selected'>Powder Room</button> */}
      {filter.map((ele,index)=>{
        return <button type="button" className={`btnTag${filterState.indexOf(ele.label) > -1 ? " selected" : ""}`} onClick={()=>handeleFilterClick(ele.label)}>{ele.label}</button>
      })}
    </div>
    <div className='minHeightBox' >
      {/* Card Start */}
      <div className='materialCard' >
        <h3 className='materialTitle' >Kitchen</h3>
        <div className='' >
            
        {data.map((item: any, itemIndex: number) => {
          return <MaterialTiles 
            item={item} 
            ImageGalleryHandler={ImageGalleryHandler} 
            itemIndex={itemIndex}
            versionClickHandler={versionClickHandler} 
            flag="Approved"
            materialDetails={materialDetails}
            setMaterialDetails={setMaterialDetails}
            />
        })}
            <div className='materialInfo' >
            <div className='materialInfoLeft' >
                <div className='materialImage' ><img src={ImagePath} /></div>
                <div className='materialInnerInfo' >
                <div>Floor Tiles</div>
                <h4>Caprice Series 8” x 8” Porcelain Patterned <span className='materialStatus approved' >Approved</span></h4>
                <div className='materialRate' ><PaymentsOutlinedIcon /><span>$1,019.25 <span className='smlText' >($13.59/sq. ft.)</span></span></div>
                </div>
            </div>
            </div>
        </div>
        {/* <div className='cardInnerInfo' >
            <div className='materialInfo' onClick={openMaterialDetails} >
            <div className='materialInfoLeft' >
                <div className='materialImage' ><img src={ImagePath} /></div>
                <div className='materialInnerInfo' >
                <div>Floor Tiles</div>
                <h4>Caprice Series 8” x 8” Porcelain Patterned <span className='materialStatus approved' >Approved</span></h4>
                <div className='materialRate' ><PaymentsOutlinedIcon /><span>$1,019.25 <span className='smlText' >($13.59/sq. ft.)</span></span></div>
                </div>
            </div>
            </div>
        </div> */}
      </div>
      {/* Card End */}
      {/* Card Start */}
      {/* <div className='materialCard' >
        <h3 className='materialTitle' >Tiles</h3>
        <div className='cardInnerInfo' >
            <div className='materialInfo' onClick={openMaterialDetails} >
            <div className='materialInfoLeft' >
                <div className='materialImage' ><img src={ImagePath} /></div>
                <div className='materialInnerInfo' >
                <div>Floor Tiles</div>
                <h4>Caprice Series 8” x 8” Porcelain Patterned <span className='materialStatus approved' >Approved</span></h4>
                <div className='materialRate' ><PaymentsOutlinedIcon /><span>$1,019.25 <span className='smlText' >($13.59/sq. ft.)</span></span></div>
                </div>
            </div>
            </div>
        </div>
      </div> */}
      {/* Card End */}
    </div>

    <div className='itemsFooter2' >
      <div>Total Approved Tiles: <span>1</span></div>
      <div>Total Items Cost: <span>--.--</span></div>
    </div>
    <div className='itemsFooter' >
        <div>Total Items: <span className='normalText' >3</span></div>
        <div>Total Items Cost: <span className='normalText'>--.--</span></div>
      </div>
  </div>
}
  

  export default Approved;