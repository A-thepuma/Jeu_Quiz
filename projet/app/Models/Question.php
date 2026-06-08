<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function reponses()
    {
        return $this->hasMany(Reponse::class);
    }
}
