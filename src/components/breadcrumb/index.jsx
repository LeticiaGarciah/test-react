import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const Breadcrumb = () => {
  const { pathname } = useLocation();

  const firstValue = useMemo(() => {
    return pathname.split("/").filter((value) => value)[0];
  }, [pathname]);

  const secondValue = useMemo(() => {
    const value = pathname.split("/").filter((value) => value)[1];

    if (value === "area-de-trabalho") return "Perfil";
    if (value === "cadastro") return "Cadastro";
    if (value === "permissoes") return "Permissões";

    return "Estatísticas";
  }, [pathname]);

  const icon = useMemo(() => {
    const value = pathname.split("/").filter((value) => value)[1];

    if (value === "area-de-trabalho") return "fa-paperclip";
    if (value === "cadastro") return "fa-plus";
    if (value === "permissoes") return "fa-wrench";

    return "fa-home";
  }, [pathname]);

  return (
    <>
      <div class="title">
        <i class={`fa ${icon}`}></i> {firstValue}{" "}
        <i class="fa fa-angle-right"></i> {secondValue}{" "}
      </div>
    </>
  );
};
