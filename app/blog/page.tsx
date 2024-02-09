import { connectToDatabase } from "@/utils/mongoose-connector";
import { Blog as G, BlogType } from "@/models/blogs";
import { Types } from "mongoose";
import ReturnForm from "@/components/returnFrom/returnForm";
import { MainContent } from "@/components/mainLayout";

const getBlog = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    return null;
  }
  const objectId = new Types.ObjectId(id);
  await connectToDatabase();
  const blog: (BlogType & { _id: string }) | null = await G.findOne({
    _id: objectId,
  });
  return blog;
};

const blog = async ({ params }: { params: { id: string } }) => {
  const g = await getBlog(params.id);
  if (!g) {
    return (
      <>
        <h1>Blog not found</h1> <h2>{params.id}</h2>
      </>
    );
  }

  return (
    <>
      <MainContent>
        <UpperWrapper>
          <MainInfoWrapper>
            <GuideTitle>{g.title}</GuideTitle>
            <GuideSubtitle>Description</GuideSubtitle>
            {g.createdAt ? (
              <GuideParagraph>
                <Markdown>{g.description}</Markdown>
              </GuideParagraph>
            ) : (
              <GuideParagraph
                dangerouslySetInnerHTML={{ __html: g.description }}
              ></GuideParagraph>
            )}
            <GuideSubtitle>Example</GuideSubtitle>
            <GuideSubtitle>{g.themeIdea.title}</GuideSubtitle>
            {g.createdAt ? (
              <GuideParagraph>
                <Markdown>{g.themeIdea.description}</Markdown>
              </GuideParagraph>
            ) : (
              <GuideParagraph
                dangerouslySetInnerHTML={{ __html: g.themeIdea.description }}
              ></GuideParagraph>
            )}
          </MainInfoWrapper>

          <SideOnfoWrapper>
            <SideFrame>
              <GuideSubtitle>Materials</GuideSubtitle>
              {allMaterials.map((material) => {
                return (
                  <MaterialLinks
                    key={material.link}
                    href={material.link}
                    target="_blank"
                  >
                    {material.title}
                  </MaterialLinks>
                );
              })}
            </SideFrame>
            <SideFrame>
              <GuideSubtitle>Topics</GuideSubtitle>
              <ul>
                return{" "}
                <li>
                  <GuideParagraph
                    dangerouslySetInnerHTML={{ __html: g.topicsList }}
                  ></GuideParagraph>
                </li>
                ;
              </ul>
            </SideFrame>
            <SideFrame>
              <GuideSubtitle>Tips</GuideSubtitle>
              <GuideParagraph>
                If you get stuck you can always contact us on Slack and we will
                reply to you as soon as we can. You can also ask us to do a
                “huddle” (a video call on Slack) with you and then we will find
                a time to do that.
              </GuideParagraph>
            </SideFrame>
          </SideOnfoWrapper>
        </UpperWrapper>
        <RequirementsWrapper>
          <GuideSubtitle>Requirements</GuideSubtitle>
          <KnowledgeAndSkillsWrapper>
            <KnowledgeWrapper>
              <GuideParagraph>Knoweldge</GuideParagraph>
              <ul>
                {g.knowledge.map((knowledge) => {
                  return (
                    <li key={knowledge.knowledge}>
                      <GuideParagraph>{knowledge.knowledge}</GuideParagraph>
                    </li>
                  );
                })}
              </ul>
            </KnowledgeWrapper>
            <SkillsWrapper>
              <GuideParagraph>Skills</GuideParagraph>
              <ul>
                {g.skills.map((skill) => {
                  return (
                    <li key={skill.skill}>
                      <GuideParagraph>{skill.skill}</GuideParagraph>
                    </li>
                  );
                })}
              </ul>
            </SkillsWrapper>
          </KnowledgeAndSkillsWrapper>
        </RequirementsWrapper>

        <ReturnForm guideId={JSON.parse(JSON.stringify(g._id))} />
      </MainContent>
    </>
  );
};

export default guide;
