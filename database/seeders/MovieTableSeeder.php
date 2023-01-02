<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Chronicles Of Narnia',
                'slug' => 'The-chronicles-of-narnia',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=JjUJj0_FC7k',
                'thumbnail' => 'https://id.pinterest.com/pin/16607092365814371/',
                'rating' => 9.0,
                'is_featured' => 1,
            ],
            [
                'name' => 'Assassins Creed',
                'slug' => 'Assassins-creed',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=U6-3k94L2E8',
                'thumbnail' => 'https://id.pinterest.com/pin/818810776019484449//',
                'rating' => 9.5,
                'is_featured' => 0,
            ],
            [
                'name' => 'The Lone Ranger',
                'slug' => 'The-lone-ranger',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=c74jMQSoTnk',
                'thumbnail' => 'https://id.pinterest.com/pin/914441899313653450/',
                'rating' => 9.3,
                'is_featured' => 1,
            ]
        ];
        Movie::insert($movies);
    }
}
