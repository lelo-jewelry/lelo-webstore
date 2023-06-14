import FooterCTA from '@modules/layout/components/footer-cta';
import FooterNav from '@modules/layout/components/footer-nav';
import { NextRouter, withRouter } from 'next/router';

const Footer = ({ router }: { router: NextRouter }) => {

    const isCollectionsPage = router.pathname.includes('/store');

    return (
        <footer>
            {!isCollectionsPage && <FooterCTA />}
            <FooterNav />
        </footer>
    );
};

export default withRouter(Footer);
