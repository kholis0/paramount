<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $SubscriptionPlans = [
        [
            'name' => 'Basic',
            'price' => 300000,
            'active_period_in_months' => 4,
            'features' => json_encode(['feature1', 'feature2']),
        ],
        [
            'name' => 'Premium',
            'price' => 130000,
            'active_period_in_months' => 9,
            'features' => json_encode(['feature1', 'feature2','feature3', 'feature4']),
        ],
    ];

    SubscriptionPlan::insert($SubscriptionPlans);
    }
}
