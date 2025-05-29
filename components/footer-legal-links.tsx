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
              <p className="mb-4">
                여기에 이용약관 내용이 들어갑니다. 실제 약관 내용으로
                교체해주세요.
              </p>
              <h3 className="text-lg font-semibold mb-2">제1조 (목적)</h3>
              <p className="mb-4">
                이 약관은 글림케어(이하 "회사")가 제공하는 서비스의 이용조건 및
                절차, 회사와 이용자의 권리, 의무, 책임사항과 기타 필요한 사항을
                규정함을 목적으로 합니다.
              </p>
              <h3 className="text-lg font-semibold mb-2">제2조 (정의)</h3>
              <p className="mb-4">
                이 약관에서 사용하는 용어의 정의는 다음과 같습니다...
              </p>
              <h3 className="text-lg font-semibold mb-2">
                제3조 (약관의 효력 및 변경)
              </h3>
              <p className="mb-4">
                이 약관은 서비스 화면에 게시하거나 기타의 방법으로 공지함으로써
                효력이 발생합니다.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                제4조 (서비스의 제공 및 변경)
              </h3>
              <p className="mb-4">회사는 다음과 같은 업무를 수행합니다...</p>
              {/* Add more content as needed */}
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
              <p className="mb-4">
                여기에 개인정보처리방침 내용이 들어갑니다. 실제 방침 내용으로
                교체해주세요.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                1. 개인정보의 처리목적
              </h3>
              <p className="mb-4">
                글림케어는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고
                있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
                이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라
                별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                2. 개인정보의 처리 및 보유기간
              </h3>
              <p className="mb-4">
                글림케어는 법령에 따른 개인정보 보유·이용기간 또는
                정보주체로부터 개인정보를 수집 시에 동의받은 개인정보
                보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                3. 처리하는 개인정보의 항목
              </h3>
              <p className="mb-4">
                글림케어는 다음의 개인정보 항목을 처리하고 있습니다...
              </p>
              <h3 className="text-lg font-semibold mb-2">
                4. 개인정보의 제3자 제공
              </h3>
              <p className="mb-4">
                글림케어는 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서
                명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한
                규정 등 개인정보보호법 제17조 및 제18조에 해당하는 경우에만
                개인정보를 제3자에게 제공합니다.
              </p>
              {/* Add more content as needed */}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FooterLegalLinks;
