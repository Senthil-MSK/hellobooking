type StringOrUndefined = string | undefined;
type BooleanOrUndefined = boolean | undefined;

export type FileDetailsType = {
  fileName: StringOrUndefined;
  folderName: StringOrUndefined;
  updatedBy: StringOrUndefined;
  date: StringOrUndefined;
  signed: BooleanOrUndefined;
  signRequired: BooleanOrUndefined;
  url: StringOrUndefined;
  thumbUrl: StringOrUndefined;
};

export type RecentFilesType = FileDetailsType[];

export type RecentFileHeaderPropsTypes = {
  showFilDetail?: string;
  customClick: () => void;
  iconClick: () => void;
  showFile: boolean;
};

export type PopperPropsType = {
  popperOpen: boolean;
  anchorEle: HTMLElement | null;
  onMoreInfoClick: () => void;
  selectedFileUrl: string;
  hidePopper: () => void;
};
