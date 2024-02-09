"use client";

import type { AggregatedBlog } from "@/utils/types/types";
import { useState } from "react";

type BlogCardProps = {
  blog: AggregatedBlog;
  nr: number;
};

const GuideCard = ({ blog, nr }: BlogCardProps) => {
  //const [isReviewHovered, setIsReviewHovered] = useState(false);
  //const [isReturnHovered, setIsReturnHovered] = useState(false);
  //const [isOpen, setIsOpen] = useState(false);

  console.log("this is the blog", blog);
  //

  return (
    <>
      <div>
        <h1>{blog.title}</h1>
      </div>
      <div>
        <h3>{blog.description}</h3>
      </div>
    </>
    /*<GuideCardContainer>
        <CardInfo>
          <NumberWrapper>
            <Number>Guide {nr + 1}</Number>
          </NumberWrapper>
          <TitleWrapper>
            <DefaultTitle isShown={!isReturnHovered && !isReviewHovered}>
              {guide.title}
            </DefaultTitle>
            <HoveredTitle isShown={isReturnHovered || isReviewHovered}>
              {returnStatus.text}
            </HoveredTitle>
          </TitleWrapper>
        </CardInfo>
      </StyledLink>
      <StyledLink onClick={() => setIsOpen(!isOpen)} href={reviewStatus.href}>
        <Status
          style={{
            background: reviewStatus.backgroundColor,
            filter: reviewModifiedColor,
          }}
          onMouseEnter={ReviewHandleMouseEnter}
          onMouseLeave={ReviewHandleMouseLeave}
        >
          {reviewStatus.text}
        </Status>
      </StyledLink>
      {returnStatus && reviewStatus.condition === needsGrading && (
        <GradingForm
          guide={guide}
          review={ungradedReviews[0]}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </GuideCardContainer>*/
  );
};

export default GuideCard;
