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
                'thumbnail' => 'https://m.media-amazon.com/images/I/81sb-P-862L._AC_UY327_FMwebp_QL65_.jpg',
                'rating' => 3.1,
                'is_featured' => 1,
            ],
            [
                'name' => 'Assassins Creed',
                'slug' => 'Assassins-creed',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=U6-3k94L2E8',
                'thumbnail' => 'https://m.media-amazon.com/images/I/A1O6gjOk0qL._AC_UY327_FMwebp_QL65_.jpg',
                'rating' => 4.4,
                'is_featured' => 0,
            ],
            [
                'name' => 'The Lone Ranger',
                'slug' => 'The-lone-ranger',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=c74jMQSoTnk',
                'thumbnail' => 'https://m.media-amazon.com/images/I/A15LpQLg9iL._AC_UY327_FMwebp_QL65_.jpg',
                'rating' => 3.2,
                'is_featured' => 2,
            ]
        ];
        Movie::insert($movies);
    }
}
