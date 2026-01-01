type User = {
    id: number;
    name: string;
    username: string;
    email: string;
};

const UserLoadingPage = async () => {
    return (
        <div>
            <div className='flex gap-4 flex-wrap'>loading</div>
        </div>
    );
};

export default UserLoadingPage;
