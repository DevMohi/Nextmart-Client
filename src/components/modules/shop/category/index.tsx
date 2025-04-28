import CreateCategoryModal from "./CreateCategoryModal";

const ManageCategories = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Categoeies</h1>
        <CreateCategoryModal />
      </div>
    </div>
  );
};

export default ManageCategories;
