import Header from "@/components/common/Header";
import GlobalLayout from "@/components/layouts/GlobalLayout";
import TermsConditionSection from "@/components/terms/TermsConditionSection";
import aboutUsImg from '@images/aboutHeader.png';

const TermsCondition = () => {
    return (
        <GlobalLayout>
            <Header pageTitle="Terms & Condition" image={aboutUsImg} path="/terms-and-conditions" />
            <TermsConditionSection />
        </GlobalLayout>
    );
};

export default TermsCondition;