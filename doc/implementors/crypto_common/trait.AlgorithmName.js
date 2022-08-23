(function() {var implementors = {
"blake2":[["impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"blake2/struct.Blake2bVarCore.html\" title=\"struct blake2::Blake2bVarCore\">Blake2bVarCore</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"blake2/struct.Blake2sVarCore.html\" title=\"struct blake2::Blake2sVarCore\">Blake2sVarCore</a>"]],
"digest":[["impl&lt;T, OutSize&gt; <a class=\"trait\" href=\"digest/core_api/trait.AlgorithmName.html\" title=\"trait digest::core_api::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"digest/core_api/struct.CtVariableCoreWrapper.html\" title=\"struct digest::core_api::CtVariableCoreWrapper\">CtVariableCoreWrapper</a>&lt;T, OutSize&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"digest/core_api/trait.VariableOutputCore.html\" title=\"trait digest::core_api::VariableOutputCore\">VariableOutputCore</a> + <a class=\"trait\" href=\"digest/core_api/trait.AlgorithmName.html\" title=\"trait digest::core_api::AlgorithmName\">AlgorithmName</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;OutSize: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"typenum/type_operators/trait.IsLessOrEqual.html\" title=\"trait typenum::type_operators::IsLessOrEqual\">IsLessOrEqual</a>&lt;T::<a class=\"associatedtype\" href=\"digest/trait.OutputSizeUser.html#associatedtype.OutputSize\" title=\"type digest::OutputSizeUser::OutputSize\">OutputSize</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"typenum/operator_aliases/type.LeEq.html\" title=\"type typenum::operator_aliases::LeEq\">LeEq</a>&lt;OutSize, T::<a class=\"associatedtype\" href=\"digest/trait.OutputSizeUser.html#associatedtype.OutputSize\" title=\"type digest::OutputSizeUser::OutputSize\">OutputSize</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>: <a class=\"trait\" href=\"typenum/type_operators/trait.IsLess.html\" title=\"trait typenum::type_operators::IsLess\">IsLess</a>&lt;<a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"typenum/operator_aliases/type.Le.html\" title=\"type typenum::operator_aliases::Le\">Le</a>&lt;T::<a class=\"associatedtype\" href=\"digest/core_api/trait.BlockSizeUser.html#associatedtype.BlockSize\" title=\"type digest::core_api::BlockSizeUser::BlockSize\">BlockSize</a>, <a class=\"type\" href=\"digest/consts/type.U256.html\" title=\"type digest::consts::U256\">U256</a>&gt;: <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>,&nbsp;</span>"]],
"sha2":[["impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha2/struct.Sha256VarCore.html\" title=\"struct sha2::Sha256VarCore\">Sha256VarCore</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha2/struct.Sha512VarCore.html\" title=\"struct sha2::Sha512VarCore\">Sha512VarCore</a>"]],
"sha3":[["impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha3/struct.Keccak224Core.html\" title=\"struct sha3::Keccak224Core\">Keccak224Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha3/struct.Keccak256Core.html\" title=\"struct sha3::Keccak256Core\">Keccak256Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha3/struct.Keccak384Core.html\" title=\"struct sha3::Keccak384Core\">Keccak384Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha3/struct.Keccak512Core.html\" title=\"struct sha3::Keccak512Core\">Keccak512Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha3/struct.Keccak256FullCore.html\" title=\"struct sha3::Keccak256FullCore\">Keccak256FullCore</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha3/struct.Sha3_224Core.html\" title=\"struct sha3::Sha3_224Core\">Sha3_224Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha3/struct.Sha3_256Core.html\" title=\"struct sha3::Sha3_256Core\">Sha3_256Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha3/struct.Sha3_384Core.html\" title=\"struct sha3::Sha3_384Core\">Sha3_384Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha3/struct.Sha3_512Core.html\" title=\"struct sha3::Sha3_512Core\">Sha3_512Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha3/struct.Shake128Core.html\" title=\"struct sha3::Shake128Core\">Shake128Core</a>"],["impl <a class=\"trait\" href=\"crypto_common/trait.AlgorithmName.html\" title=\"trait crypto_common::AlgorithmName\">AlgorithmName</a> for <a class=\"struct\" href=\"sha3/struct.Shake256Core.html\" title=\"struct sha3::Shake256Core\">Shake256Core</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()