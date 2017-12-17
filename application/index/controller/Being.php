<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/12/18 0018
 * Time: 上午 12:14
 */

namespace app\index\controller;


use think\Db;

class Being extends Base
{
    public function index()
    {
        $order = Db::table("order") -> where("type", "=", "1") -> paginate(10);
        $page  = $order -> render();

        $this -> assign([
            "order" => $order,
            "page"  => $page
        ]);

        return $this -> fetch();
    }
    public function close()
    {
        $result = Db::table("order") -> where("id", "=", $_REQUEST["id"]) -> update(["type" => "2"]);

        if ($result == 1) {
            return $this -> redirect('being/complete');
        }
    }
    public function complete()
    {
        $order = Db::table("order") -> where("type", "=", "2") -> paginate(10);
        $page  = $order -> render();

        $this -> assign([
            "order" => $order,
            "page"  => $page
        ]);

        return $this -> fetch();
    }
}