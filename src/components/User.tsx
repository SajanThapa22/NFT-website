const User = () => {
  return (
    <div className="flex">
      <div className="w-9 aspect-square rounded-full overflow-hidden">
        <img src="" alt="" />
      </div>

      <div className="flex flex-col justify-between">
        <p className="text-txt-clr text-sm font-semibold">name</p>
        <p className="text-txt-clr text-sm">text</p>
      </div>
    </div>
  );
};

export default User;
