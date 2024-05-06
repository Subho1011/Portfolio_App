


const PreLoader = ({isLoading}) => {
  return(
    <div className={isLoading ? 'loader' : 'no-loader'}></div>
  );
}

export default PreLoader;