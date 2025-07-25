"use client";
import React from "react";
import styles from "@/styles/components/announce-card.module.scss";
import { scaledIndex } from "@/utils/common";
import { RecruitData } from "./Section";
import NotDataSwimming from "../common/not-data";
import Image from "next/image";
import icon_arrow from "../../../public/icon/arrow_black.svg";
import Link from "next/link";

type AnnounceCardType = {
  title: string;
  description: string;
  items: RecruitData[];
};

export default function AnnounceCard({
  title,
  description,
  items,
}: AnnounceCardType) {
  const handleCardClick = ({ id, path }: { id: number; path: string }) => {
    if (id) {
      window.open(`/recruitment-notices?id=${id}&path=${path}`, "_blank");
    }
  };

  const generateCompanyName = (item: RecruitData) => {
    if (item.corporates.length > 0) {
      return item.corporates[0].corporateName;
    }
    return item.companyName;
  };

  return (
    <div className={styles.card__wrapper}>
      <h2> {title} </h2>
      <span> {description} </span>
      <div className={styles.card__data__list}>
        {items.length ? (
          items.map((item, index) => (
            <div
              key={index}
              className={styles.card__data__item}
              onClick={() =>
                handleCardClick({
                  id: item.recruitmentNoticeId,
                  path: item.url,
                })
              }
            >
              <span> {scaledIndex(index + 1)} </span>
              <span> {generateCompanyName(item)} </span>
              <span> · </span>
              <span> {item.jobOfferTitle} </span>
            </div>
          ))
        ) : (
          <NotDataSwimming description="데이터가 존재하지 않아요" />
        )}
        <Link href="/web" className={styles.card__more__data}>
          <span> 더 많은 공고 보러가기 </span>
          <Image
            src={icon_arrow}
            width={14}
            height={14}
            alt="더 많은 공고 보러가기"
          />
        </Link>
      </div>
    </div>
  );
}
