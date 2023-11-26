import Layout from "../../page";

export default function Management() {
  return (
    <Layout>
      {/* Navbar */}
      <div className="">
        <div className="flex items-center justify-between  p-10">
          <h2 className="text-2xl font-bold mb-3 ">Management</h2>
          {/* current year and data  */}
          <h1>
            <span className="text-2xl font-bold mb-3 ">2023</span>
          </h1>
        </div>
        {/* Content */}
      </div>
    </Layout>
  );
}
