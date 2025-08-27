import { useEffect } from "react";
import toast from "react-hot-toast";
import UserStore from "../../store/UserStore";
import ProfileSkeleton from "../../skeleton/ProfileSkeleton";

function ProfileForm() {
  let {
    ProfileForm,
    ProfileFormChange,
    ProfileDetails,
    ProfileDetailsRequest,
    ProfileSaveRequest,
  } = UserStore();

  useEffect(() => {
    (async () => {
      await ProfileDetailsRequest();
    })();
  }, []);

  const save = async () => {
    let res = await ProfileSaveRequest(ProfileForm);
    if (res) {
      toast.success("Profile Updated.");
      await ProfileDetailsRequest();
    }
  };

  if (ProfileDetails === null) {
    return <ProfileSkeleton />;
  } else {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl animate-slide-down">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-yellow-500 mb-2">Profile Information</h2>
            <p className="text-green-200 mb-6">Update your customer and shipping details</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-800 bg-opacity-40 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Customer Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-green-100 mb-1">Customer Name</label>
                    <input
                      value={ProfileForm.cus_name}
                      onChange={(e) => {
                        ProfileFormChange("cus_name", e.target.value);
                      }}
                      type="text"
                      className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-100 mb-1">Customer Phone</label>
                    <input
                      value={ProfileForm.cus_phone}
                      onChange={(e) => {
                        ProfileFormChange("cus_phone", e.target.value);
                      }}
                      type="text"
                      className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-100 mb-1">Customer Fax</label>
                    <input
                      value={ProfileForm.cus_fax}
                      onChange={(e) => {
                        ProfileFormChange("cus_fax", e.target.value);
                      }}
                      type="text"
                      className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-green-100 mb-1">Country</label>
                      <input
                        value={ProfileForm.cus_country}
                        onChange={(e) => {
                          ProfileFormChange("cus_country", e.target.value);
                        }}
                        type="text"
                        className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-100 mb-1">City</label>
                      <input
                        value={ProfileForm.cus_city}
                        onChange={(e) => {
                          ProfileFormChange("cus_city", e.target.value);
                        }}
                        type="text"
                        className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-green-100 mb-1">State</label>
                      <input
                        value={ProfileForm.cus_state}
                        onChange={(e) => {
                          ProfileFormChange("cus_state", e.target.value);
                        }}
                        type="text"
                        className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-100 mb-1">Post Code</label>
                      <input
                        value={ProfileForm.cus_postcode}
                        onChange={(e) => {
                          ProfileFormChange("cus_postcode", e.target.value);
                        }}
                        type="text"
                        className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-100 mb-1">Address</label>
                    <input
                      value={ProfileForm.cus_add}
                      onChange={(e) => {
                        ProfileFormChange("cus_add", e.target.value);
                      }}
                      type="text"
                      className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-green-800 bg-opacity-40 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Shipping Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-green-100 mb-1">Shipping Name</label>
                    <input
                      value={ProfileForm.ship_name}
                      onChange={(e) => {
                        ProfileFormChange("ship_name", e.target.value);
                      }}
                      type="text"
                      className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-100 mb-1">Shipping Phone</label>
                    <input
                      value={ProfileForm.ship_phone}
                      onChange={(e) => {
                        ProfileFormChange("ship_phone", e.target.value);
                      }}
                      type="text"
                      className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-green-100 mb-1">Country</label>
                      <input
                        value={ProfileForm.ship_country}
                        onChange={(e) => {
                          ProfileFormChange("ship_country", e.target.value);
                        }}
                        type="text"
                        className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-100 mb-1">City</label>
                      <input
                        value={ProfileForm.ship_city}
                        onChange={(e) => {
                          ProfileFormChange("ship_city", e.target.value);
                        }}
                        type="text"
                        className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-green-100 mb-1">State</label>
                      <input
                        value={ProfileForm.ship_state}
                        onChange={(e) => {
                          ProfileFormChange("ship_state", e.target.value);
                        }}
                        type="text"
                        className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-100 mb-1">Post Code</label>
                      <input
                        value={ProfileForm.ship_postcode}
                        onChange={(e) => {
                          ProfileFormChange("ship_postcode", e.target.value);
                        }}
                        type="text"
                        className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-100 mb-1">Address</label>
                    <input
                      value={ProfileForm.ship_add}
                      onChange={(e) => {
                        ProfileFormChange("ship_add", e.target.value);
                      }}
                      type="text"
                      className="w-full px-4 py-2 bg-green-700 border border-green-600 rounded-lg text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button 
                onClick={save} 
                className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition-all duration-200 flex items-center shadow-lg hover:shadow-green-700/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileForm;