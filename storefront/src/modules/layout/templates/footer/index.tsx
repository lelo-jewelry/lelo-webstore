import FooterCTA from '@modules/layout/components/footer-cta';
import FooterNav from '@modules/layout/components/footer-nav';
import { NextRouter, withRouter } from 'next/router';

const Footer = ({ router }: { router: NextRouter }) => {

    const ignorePages = ['/store', '/account'];
    const isCollectionsPage = ignorePages.some(page => router.pathname.includes(page));

    return (
        <footer>
            {!isCollectionsPage && <FooterCTA />}
            <FooterNav />
        </footer>
    );
};

export default withRouter(Footer);
