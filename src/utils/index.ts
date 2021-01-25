export const numberFix = (number: number) : number => {
  return Math.floor(number * 100) / 100
}

type shallowCompareObjectsType = {
  [propety: string] : any
}

export const shallowCompare = (fistObj: shallowCompareObjectsType, secondObj: shallowCompareObjectsType) : boolean => {  
  return Object.keys(fistObj).length === Object.keys(secondObj).length &&
  Object.keys(fistObj).every(key => 
    secondObj.hasOwnProperty(key) && fistObj[key] === secondObj[key]
  );
}