<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/12/17 0017
 * Time: 下午 3:30
 */

namespace app\index\controller;


use think\Db;

class Company extends Base
{
    public function index()
    {
        $company = Db::table("company") -> paginate(10);
        $page = $company -> render();

        $type = Db::table("type") -> select();

        $this -> assign([
            "company" => $company,
            "page"    => $page,
            "type"    => $type,
        ]);

        return $this -> fetch();
    }
    public function add()
    {
        if (empty($_REQUEST["name"])) {
            $type = Db::table("type") -> select();
            $this -> assign([
                "type" => $type
            ]);

            return $this -> fetch();
        } else {
            $size = Db::table("size") -> select();

            $map = [
                "name"     => $_REQUEST["name"],
                "amount"   => $_REQUEST["amount"],
                "type"     => $_REQUEST["type"],
                "service"  => $_REQUEST["service"],
                "size"     => $_REQUEST["size"],
                "time"     => date("Y-m-d H:i:s"),
                "size_num" => $size[$_REQUEST["size"] - 1]["num"]
            ];

            $result = Db::table("company") -> insert($map);

            if ($result == 1) {
                return $this -> redirect('company/index');
            }
        }
    }
    public function delete()
    {
        $company_id = $_REQUEST["company_id"];

        $result = Db::table("company") -> where("id", "=", $company_id) -> delete();

        if ($result == 1) {
            return $this -> redirect('company/index');
        }
    }
    public function edit()
    {
        if (empty($_REQUEST["name"])) {

            $company = Db::table("company") -> where("id", "=", $_REQUEST["company_id"]) -> select()[0];
            $type    = Db::table("type") -> select();
            $size    = Db::table("size") -> select();
            $this -> assign([
                "type"    => $type,
                "size"    => $size,
                "company" => $company
            ]);
            return $this -> fetch();
        } else {
            $size = Db::table("size") -> select();

            $map = [
                "name"     => $_REQUEST["name"],
                "amount"   => $_REQUEST["amount"],
                "type"     => $_REQUEST["type"],
                "service"  => $_REQUEST["service"],
                "size"     => $_REQUEST["size"],
                "size_num" => $size[$_REQUEST["size"] - 1]["num"]
            ];

            $result = Db::table("company") -> where("id", "=", $_REQUEST["company_id"]) -> update($map);

            if ($result == 1) {
                return $this -> redirect('company/index');
            }
        }
    }
    public function credit()
    {
        $company = Db::table("company") -> paginate(10);
        $page = $company -> render();

        $type = Db::table("type") -> select();

        $this -> assign([
            "company" => $company,
            "page"    => $page,
            "type"    => $type,
        ]);

        return $this -> fetch();
    }
    public function credit_edit()
    {
        $company = Db::table("company") -> where("id", "=", $_REQUEST["company_id"]) -> select()[0];
        $type    = Db::table("type") -> select();
        $size    = Db::table("size") -> select();
        $risk    = Db::table("risk") -> select();
        $this -> assign([
            "type"    => $type,
            "size"    => $size,
            "risk"    => $risk,
            "company" => $company
        ]);
        return $this -> fetch();
    }
    public function examine()
    {
        $map = $_REQUEST;

        $map["risk_num"] = "AE" . time();

        $result = Db::table("company") -> where("id", "=", $_REQUEST["id"]) -> update($map);

        if ($result == 1) {
            return $this -> redirect('company/credit');
        }
    }
}