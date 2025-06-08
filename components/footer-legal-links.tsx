"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FooterLegalLinks = () => {
  return (
    <div className="flex items-center gap-1">
      {/* Terms of Service Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <button className="px-4 py-2 text-primary text-sm hover:bg-background rounded transition-colors">
            이용약관
          </button>
        </DialogTrigger>
        <DialogContent className="h-[90vh] w-[65ch] max-w-[calc(100vw-2rem)] sm:max-w-[65ch] md:h-[90vh] max-h-[90vh] overflow-hidden p-0">
          <DialogHeader className="p-6 pb-4 border-b">
            <DialogTitle className="text-xl font-semibold">
              이용약관
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-y-auto p-6 pt-4">
            <div className="prose prose-sm max-w-none">
              <h3 className="text-lg font-semibold mb-2">제1조 (목적)</h3>
              <p className="mb-4">
                이 약관은 글림케어(이하 &quot;회사&quot;)가 제공하는 모든
                서비스(이하 &quot;서비스&quot;)의 이용조건 및 절차, 이용자와
                회사의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을
                목적으로 합니다.
              </p>
              <h3 className="text-lg font-semibold mb-2">제2조 (정의)</h3>
              <p className="mb-4">
                이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                <br />
                1. &quot;서비스&quot;라 함은 회사가 제공하는 글림케어 관련 제반
                서비스를 의미합니다.
                <br />
                2. &quot;이용자&quot;라 함은 회사의 웹사이트에 접속하여 이
                약관에 따라 회사가 제공하는 서비스를 이용하는 고객을 말합니다.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                제3조 (약관의 효력 및 변경)
              </h3>
              <p className="mb-4">
                1. 이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그
                효력을 발생시킵니다.
                <br />
                2. 회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스
                초기 화면에 게시합니다.
                <br />
                3. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이
                약관을 변경할 수 있습니다. 변경된 약관은 공지를 통해 효력이
                발생합니다.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                제4조 (서비스의 제공 및 변경)
              </h3>
              <p className="mb-4">
                1. 회사는 다음과 같은 서비스를 제공합니다.
                <br />
                - 글림케어 서비스 관련 정보 제공
                <br />
                - 견적 및 교육 문의 등 고객 상담 서비스
                <br />
                - 기타 회사가 정하는 업무
                <br />
                2. 회사는 서비스의 내용, 품질, 또는 기술적 사양 등에 대해 회사의
                정책적인 판단에 따라 변경할 수 있습니다.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                제5조 (회사의 의무)
              </h3>
              <p className="mb-4">
                1. 회사는 법령과 이 약관이 정하는 바에 따라 지속적이고
                안정적으로 서비스를 제공하는 데 최선을 다하여야 합니다.
                <br />
                2. 회사는 이용자의 개인정보 보호를 위해 보안 시스템을 갖추어야
                하며 개인정보처리방침을 공시하고 준수합니다.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                제6조 (이용자의 의무)
              </h3>
              <p className="mb-4">
                1. 이용자는 다음 행위를 하여서는 안 됩니다.
                <br />
                - 허위 내용의 등록
                <br />
                - 타인의 정보 도용
                <br />
                - 회사가 게시한 정보의 변경
                <br />- 회사의 정상적인 서비스 운영을 방해하는 행위
              </p>
              <h3 className="text-lg font-semibold mb-2">제7조 (책임제한)</h3>
              <p className="mb-4">
                1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를
                제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
                <br />
                2. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는
                책임을 지지 않습니다.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                제8조 (준거법 및 재판관할)
              </h3>
              <p className="mb-4">
                1. 회사와 이용자 간에 발생한 분쟁에 대해서는 대한민국 법을
                준거법으로 합니다.
                <br />
                2. 회사와 이용자 간 발생한 분쟁에 관한 소송은 민사소송법 상의
                관할법원에 제소합니다.
              </p>
              <p className="mb-4">
                <strong>부칙</strong>
                <br />이 약관은 2025년 6월 8일부터 시행됩니다.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="w-px h-5 bg-primary" />

      {/* Privacy Policy Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <button className="px-4 py-2 text-primary text-sm hover:bg-background rounded transition-colors">
            개인정보처리방침
          </button>
        </DialogTrigger>
        <DialogContent className="h-[90vh] w-[65ch] max-w-[calc(100vw-2rem)] sm:max-w-[65ch] md:h-[90vh] max-h-[90vh] overflow-hidden p-0">
          <DialogHeader className="p-6 pb-4 border-b">
            <DialogTitle className="text-xl font-semibold">
              개인정보처리방침
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-y-auto p-6 pt-4">
            <div className="prose prose-sm max-w-none">
              <h3 className="text-lg font-semibold mb-2">
                제1조 (개인정보의 처리 목적)
              </h3>
              <p className="mb-4">
                글림케어(이하 &quot;회사&quot;)는 다음의 목적을 위하여
                개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적
                이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는
                개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를
                이행할 예정입니다.
                <br />
                - 고객 문의 접수 및 상담(견적, 교육, 기타 문의)
                <br />- 서비스 제공 및 안내
              </p>
              <h3 className="text-lg font-semibold mb-2">
                제2조 (처리하는 개인정보의 항목)
              </h3>
              <p className="mb-4">
                회사는 문의 접수 및 상담을 위해 아래와 같은 개인정보를 수집하고
                있습니다.
                <br />
                - 필수항목: 이름, 이메일 주소, 연락처
                <br />- 선택항목: 문의 내용, 첨부 이미지
              </p>
              <h3 className="text-lg font-semibold mb-2">
                제3조 (개인정보의 처리 및 보유 기간)
              </h3>
              <p className="mb-4">
                회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
                개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서
                개인정보를 처리·보유합니다. 원칙적으로 개인정보 수집 및 이용
                목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                <br />
                다만, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안
                보존합니다.
                <br />
                - 소비자의 불만 또는 분쟁 처리에 관한 기록: 3년 (전자상거래
                등에서의 소비자보호에 관한 법률)
                <br />
                - 본인확인에 관한 기록: 6개월 (정보통신망 이용촉진 및 정보보호
                등에 관한 법률)
                <br />- 방문에 관한 기록: 3개월 (통신비밀보호법)
              </p>
              <h3 className="text-lg font-semibold mb-2">
                제4조 (개인정보의 제3자 제공)
              </h3>
              <p className="mb-4">
                회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
                다만, 아래의 경우에는 예외로 합니다.
                <br />
                - 이용자들이 사전에 동의한 경우
                <br />- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진
                절차와 방법에 따라 수사기관의 요구가 있는 경우
              </p>
              <h3 className="text-lg font-semibold mb-2">
                제5조 (정보주체와 법정대리인의 권리·의무 및 행사방법)
              </h3>
              <p className="mb-4">
                이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나
                수정할 수 있으며, 회사의 개인정보 처리에 동의하지 않는 경우
                동의를 거부하거나 삭제를 요청할 수 있습니다. 개인정보의 조회,
                수정, 삭제 요청은 개인정보 보호책임자에게 서면, 전화 또는
                이메일로 연락하시면 지체 없이 조치하겠습니다.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                제6조 (개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항)
              </h3>
              <p className="mb-4">
                회사는 이용자에게 특화된 맞춤 서비스를 제공하기 위해
                쿠키(cookie)를 사용하지 않습니다.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                제7조 (개인정보 보호책임자)
              </h3>
              <p className="mb-4">
                회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을
                처리하기 위하여 아래와 같이 관련 부서 및 개인정보 보호책임자를
                지정하고 있습니다.
                <br />
                - 이름: 박기동
                <br />
                - 이메일: ubilis99@naver.com
                <br />
                - 연락처: 0507-1366-9797
                <br />
                기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래
                기관에 문의하시기 바랍니다.
                <br />
                - 개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)
                <br />
                - 대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)
                <br />- 경찰청 사이버안전국 (cyberbureau.police.go.kr / 국번없이
                182)
              </p>
              <h3 className="text-lg font-semibold mb-2">
                제8조 (개인정보의 안전성 확보 조치)
              </h3>
              <p className="mb-4">
                회사는 이용자들의 개인정보를 처리함에 있어 개인정보가 분실,
                도난, 유출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여
                다음과 같은 기술적/관리적 대책을 강구하고 있습니다.
                <br />
                1. 관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등
                <br />
                2. 기술적 조치: 개인정보처리시스템 등의 접근권한 관리,
                접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치
                <br />
                3. 물리적 조치: 전산실, 자료보관실 등의 접근통제
              </p>
              <p className="mb-4">
                <strong>부칙</strong>
                <br />이 개인정보처리방침은 2025년 6월 8일부터 적용됩니다.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FooterLegalLinks;
