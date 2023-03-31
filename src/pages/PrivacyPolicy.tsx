import Header from '@/components/common/Header';
import GlobalLayout from '@/components/layouts/GlobalLayout';
import PrivacyPolicySection from '@/components/privacy';
import aboutUsImg from '@images/aboutHeader.png';

const PrivacyPolicy = () => {
    return (
        <GlobalLayout>
            <Header pageTitle="Privacy Policy" image={aboutUsImg} path="/privacy-policy" />
            <PrivacyPolicySection />
        </GlobalLayout>
    );
};

export default PrivacyPolicy;