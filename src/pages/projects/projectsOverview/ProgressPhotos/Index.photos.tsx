import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
// local imports
import SectionHeader from "../../../../components/SectionHeader/Index.sectionheader";
import {ReactComponent as EmptyGallery} from "../../../../assets/images/icons/empty-gallery.svg";
import ProgressStyles from "./progressPhotos";
import { projectsActions } from '../../../../redux/projects/projects.actions';
import { useAppSelector, useAppDispatch } from '../../../../redux/store/store';
import { userObject } from '../../../../redux/auth/auth.selectors';
import { projectsGallery } from '../../../../redux/projects/projects.selectors';

// Default Export for Progress Photos
export default function ProgressPhotos() {
  const dispatch = useAppDispatch();
  const user: any = useAppSelector(userObject);
  const projectGallery: any = useAppSelector(projectsGallery);
  const [device, setDevice] = useState("desktop");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Fetch Gallery Images data on load
    dispatch(projectsActions.projectsGalleryAction(user?.projectId));
    // Check device width on load
    if(window.outerWidth < 992){
      setDevice("ipad");
    }else if(window.outerWidth < 767){
      setDevice("mobile");
    }
  }, []);
  // Slick slider default settings
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    variableWidth:true,
    slidesToScroll: 1,
    arrows:true,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 3
      }
    },{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        centerPadding: "20px",
        centerMode: true,
        slidesToShow: 2.1,
      }
    }, {
      breakpoint: 500,
      settings: {
        centerPadding: "0px",
        centerMode: true,
        slidesToShow: 1,
      }
    }]
  };
  // Open Lightbox on click of image
  const openGallery = (index: number) => {
    setPhotoIndex(index);
    setTimeout(function(){
      setIsOpen(true);
    })
    
  }
  return (
    <ProgressStyles>
      <SectionHeader>
        <Typography variant="h4">Progress Photos</Typography>
        <Link to="#" className="boxTitleLink">Open Gallery</Link>
      </SectionHeader>
      <Box>
        {/* Render Slider || Static Images */}
        {projectGallery.length > 2 ? <Slider className="sliderimageWrapper" {...settings}>
          {projectGallery.map((galleryObject: any, index: number) => {
            return (
              <div key={galleryObject.url} onClick={() => openGallery(index)}>
                <div className="imageWrapper" style={{backgroundImage: `url(${device === "desktop" ? galleryObject.url : (device === "ipad" ? galleryObject.thumbnailMedium : galleryObject.thumbnailSmall)})`, cursor: "pointer"}}>
                  <h3>{galleryObject.title} <span>{galleryObject.createdAt}</span></h3>
                </div>
              </div>
            )
          })}
        </Slider> : projectGallery.length > 0 ? <div className="thumbWrappers">
          {projectGallery.map((galleryObject: any, index: number) => {
            return (
              <div key={galleryObject.url} onClick={() => openGallery(index)} className="imageWrapper" style={{backgroundImage: `url(${device === "desktop" ? galleryObject.url : (device === "ipad" ? galleryObject.thumbnailMedium : galleryObject.thumbnailSmall)})`, cursor: "pointer"}}>
                <h3>{galleryObject.title} <span>{galleryObject.createdAt}</span></h3>
              </div>
            )
          })}
        </div> : (
          <div  className="photosWrapper"><Typography variant="h4">Progress photos coming soon!</Typography>
          <EmptyGallery /></div>
        )}
      </Box>
      {/* Render Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={projectGallery[photoIndex].url}
          nextSrc={projectGallery[(photoIndex + 1) % projectGallery.length].url}
          prevSrc={projectGallery[(photoIndex + projectGallery.length - 1) % projectGallery.length].url}
          onCloseRequest={() => setIsOpen(false)}
          imageCaption={projectGallery[photoIndex].title}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + projectGallery.length - 1) % projectGallery.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % projectGallery.length)
          }
        />
      )}
    </ProgressStyles>
  );
}
