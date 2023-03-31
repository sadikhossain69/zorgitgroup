import Header from "@/components/common/Header";
import GlobalLayout from "@/components/layouts/GlobalLayout";
import TermsConditionSection from "@/components/terms/TermsConditionSection";
import aboutUsImg from '@images/aboutHeader.png';

const TermsCondition = () => {
    return (
        <GlobalLayout>
            <Header pageTitle="Privacy Policy" image={aboutUsImg} path="/privacy-policy" />
            <TermsConditionSection />
        </GlobalLayout>
    );
};

export default TermsCondition;