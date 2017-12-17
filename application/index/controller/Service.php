<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/12/17 0017
 * Time: 下午 7:05
 */

namespace app\index\controller;


use think\Db;

class Service extends Base
{
    public function index()
    {
        $company = Db::table("company")
                    -> where("risk", "neq", "")
                    -> where("list_type", "neq", "1")
                    -> select();

        $this -> assign([
            "company" => $company
        ]);

        return $this -> fetch();
    }
    public function add()
    {
        $company_id = $_REQUEST["company_id"];
        $company = Db::table("company") -> where("id", "=", $company_id) -> select()[0];

        $map = [
            "amount"         => $_REQUEST["amount"],
            "risk_num"       => $company["risk_num"],
            "order_num"      => "OD" . time(),
            "company_name"   => $company["name"],
            "company_id"     => $company_id,
            "risk"           => $company["risk"],
            "size"           => $company["size_num"],
            "company_amount" => $company["amount"],
            "type"           => "0",
        ];

        $result = Db::table("order") -> insert($map);

        if ($result == 1) {
            $this -> redirect("service/lists");
        }

    }
    public function lists()
    {
        $lists = Db::table("order") -> where("type", "=", "0") -> paginate(10);
        $page  = $lists -> render();

        $this -> assign([
            "lists" => $lists,
            "page"  => $page
        ]);
        return $this -> fetch();
    }
    public function examine()
    {
        $id = $_REQUEST['id'];
        $result = Db::table("order") -> where("id", "=", $id) ->update(["type" => "1"]);

        if ($result == 1) {
           return $this -> redirect('being/index');
        }
    }
}