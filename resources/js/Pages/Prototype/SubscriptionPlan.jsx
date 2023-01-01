import Authenticated from '@/Layouts/Authenticated/Index';
import SubscriptionCard from '@/Components/SubscriptionCard';

export default function SubscriptionPlan() {
    return (
        <Authenticated>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* Basic */}
                    <SubscriptionCard
                        name="Basic"
                        price={300000}
                        durationInMonth={2}
                        features={['feature 1', 'feature 2', 'feature 3']}
                    />

                    {/* Premium */}
                    <SubscriptionCard isPremium
                     name="Premium"
                     price={9999990}
                     durationInMonth={9}
                     features={['feature 1', 'feature 2', 'feature 3']}
                     />
                </div>
            </div>
        </Authenticated>
    );
}
