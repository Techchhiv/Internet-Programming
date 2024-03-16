<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Faker\Factory as Faker;

/**
 * @OA\Info(
 *      version="1.0.0",
 *      title="L5 OpenApi",
 *      description="L5 Swagger OpenApi description"
 * )
 *
 */

class CategoryController extends Controller
{
    // --- GetAll /api/categories
    /**
     * @OA\Get(
     *     path="/categories",
     *     description="Get all categories",
     *     @OA\Response(response="default", description="")
     * )
     */
    public function getCategories(){
       $categories = Category::all();

       return view('showcat',['c' => $categories]);
        // return $categories;
    }

    // --- Post /api/categories
    /**
     * @OA\Post(
     *     path="/categories",
     *     description="Create new categories",
     *     @OA\Response(response="default", description="")
     * )
     */
    public function createCategories(){
        $name = Faker::create();

        $category = new Category([
            'name' => $name->name
        ]);
        $category->save();

        return view('showcat',['c'=> Category::all()]);
    }

    // --- Get /api/categories/{categoryId}
    /**
     * @OA\Get(
     *     path="/categories/{categoryId}",
     *     description="Get category by ID",
     *     @OA\Response(response="default", description="")
     * )
     */
    public function getCategory($categoryId){
        $categories[] = Category::find($categoryId);

        return view('showcat',['c'=> $categories]);
        // return $categories;
    }

    // --- Patch /api/categories/{categoryId}
    /**
     * @OA\Patch(
     *     path="/categories/{categoryId}",
     *     description="Update category by ID",
     *     @OA\Response(response="default", description="")
     * )
     */
    public function updateCategory($categoryId){
        $category[] = Category::find($categoryId);

        $category[0]->name = 'ChangedName';
        $category[0]->save();

        return view('showcat',['c'=> $category]);
    }

    // --- Delete /api/categories/{categoryId}
     /**
     * @OA\Delete(
     *     path="/categories/{categoryId}",
     *     description="Delete category by ID",
     *     @OA\Response(response="default", description="")
     * )
     */
    public function deleteCategory($categoryId){
        $category = Category::find($categoryId);

        $category->delete();
        return view('showcat',['c'=> Category::all()]);
    }


}
