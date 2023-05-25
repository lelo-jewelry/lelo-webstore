import Button from '@modules/common/components/button';
import Link from 'next/link';

const SignInPrompt = () => {
    return (
        <div className="bg-white flex justify-between items-center">
            <h2 className="text-xl-semi">Already have an account?</h2>
            <div className="">
                <Link href="/account/login">
                    <a><Button variant="secondary">Sign in</Button></a>
                </Link>
            </div>
        </div>
    );
};

export default SignInPrompt;
