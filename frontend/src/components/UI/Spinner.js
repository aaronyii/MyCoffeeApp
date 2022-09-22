function Spinner() {
  return (
    <div className="fixed inset-0 bg-[#00000080] z-[5000] flex justify-center items-center">
      <div className="w-[64px] h-[64px] border-[8px] border-solid border-black rounded-[50%] animate-spin"></div>
    </div>
  );
}

export default Spinner;
