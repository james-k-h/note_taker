import Sidebar from '@/components/sidebar';

const LandingWorkspace = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="grid grid-cols-6">
        <Sidebar />
        <p className="col-span-5">placeholder</p>
      </div>
    </main>
  );
};
export default LandingWorkspace;
